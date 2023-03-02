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
import { Button } from "@mui/material";
import Invites from "./Invites";

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
          <h3>People you may know from ABC | Part of XYZ</h3>
        </div>
      </div>


      <FlipMove>
        {posts.map((item, i) => {
          return (
            <Post
              key={i}
              name={item.name}
              description={item.description}
              message={item.message}
              photoUrl={item.photoUrl}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default NetworkFeed;
