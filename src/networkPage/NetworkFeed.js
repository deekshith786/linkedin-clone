import React, { useEffect, useState } from "react";
import "../feed/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "../inputOption/InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "../post/Post";
import { db } from "../config/firebase";
import firebase from "firebase/compat/app";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";
import "../networkPage/NetworkFeed.css";
import { Avatar, Button, Typography } from "@mui/material";
import Invites from "./Invites";
import "../sidebar/Sidebar.css";
import CardGrid from "../card/CardGrid";
import Card from "../card/Card";
import { Box } from "@mui/system";

function NetworkFeed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let cities = [];
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      setPosts(cities);
    });
  }, [posts]);

  const sendPost = (e) => {
    /**to prevent refresh when click enter */
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="networkfeed">
      <div className="networkfeed__inputContainer">
        <div className="network__invitations">
          <h3>Invitations</h3>
          <Button variant="outlined">Manage</Button>
        </div>
        <div className="network__people">
          {posts.map((item, i) => {
            return (
              <Invites
                key={i}
                name={item.name}
                description={item.description}
                message={item.message}
                photoUrl={item.photoUrl}
              />
            );
          })}
        </div>
      </div>
      <div className="networkfeed__inputContainer">
        <div className="network__celebrations">
          <h3>Celebrations</h3>
          <h4>See All</h4>
        </div>
        <p>Job changes, Birthdays, Work anniversaries</p>
      </div>

      <div className="networkfeed__inputContainer">
        <div className="network__people">
          <Typography sx={{ paddingBottom: 3 }}>
            People you may know from ABC | Part of XYZ
          </Typography>
          <CardGrid>
            {Array(6)
              .fill()
              .map((_, i) => (
                <Card key={i} sx={{ display: "block" }}>
                  <img
                    className="people__image"
                    src="https://contentstatic.techgig.com/photo/87644309/Believe-It-Naruto-is-coming-to-Fortnite-this-November.jpg"
                    alt=""
                    width="100px"
                    height="100px"
                  />
                </Card>
              ))}
          </CardGrid>

        </div>
      </div>
    </div>
  );
}

export default NetworkFeed;
