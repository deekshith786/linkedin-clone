import React, { useEffect, useState } from "react";
import "../feed/Feed.css";
import { db } from "../config/firebase";
import firebase from "firebase/compat/app";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";
import "../networkPage/NetworkFeed.css";
import { Divider, Typography } from "@mui/material";
import "../sidebar/Sidebar.css";
import { Box } from "@mui/system";
import Post from "../post/Post";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const names = [
  "Deekshith",
  "Jayanth",
  "Vibhav",
  "Sameer",
  "Satish",
  "Gangadhar",
  "Rahul",
  "Praveen",
  "Krishna",
  "Uday",
];

function JobsFeed() {
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
        <div className="network__celebrations">
          <h3>Recent job searches</h3>
          <Typography sx={{ fontWeight: "light" }}>clear</Typography>
        </div>
        <b>Software Engineer · 437 new</b>
        <Typography sx={{ fontWeight: "light", fontSize: "small" }}>
          Alert On · Hyderabad, Telangana, India · On-site · Hybrid
        </Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <b>Software Engineer · 437 new</b>
        <Typography sx={{ fontWeight: "light", fontSize: "small" }}>
          Alert On · Hyderabad, Telangana, India · On-site · Hybrid
        </Typography>
        {/* <Divider sx={{margin:2, marginBottom:2}}/> */}
      </div>

      <div className="networkfeed__inputContainer">
        <Box sx={{ paddingTop: 2, paddingBottom: 2 }}>
          <h3>Recommended for you</h3>
          <Typography
            sx={{
              fontWeight: "light",
              fontSize: "small",
              paddingTop: 1,
              paddingBottom: 1,
            }}
          >
            Based on your profile and search history
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <img
              src="https://media.licdn.com/dms/image/C4E0BAQHJUDZhWnP4MA/company-logo_100_100/0/1654088523608?e=1686182400&v=beta&t=1IZ1DNruuGcRWXYKDMN5zaHUvLEFz17zujfe2emfg8E"
              alt=""
              width={50}
              height={50}
            />
            <Box>
              <Typography
                sx={{ paddingLeft: 2, fontWeight: "bold", color: "#0a66c2" }}
              >
                Senior Java Developer
              </Typography>
              <Typography sx={{ paddingLeft: 2, fontSize: 13 }}>
                EPAM Anywhere
              </Typography>
              <Typography
                sx={{
                  paddingLeft: 2,
                  fontSize: 13,
                  fontWeight: "light",
                  color: "grey",
                }}
              >
                Hyderabad, Telangana, India
              </Typography>
              <Typography
                sx={{
                  paddingLeft: 2,
                  fontSize: 13,
                  fontWeight: "light",
                  color: "grey",
                }}
              >
                Actively Recruting
              </Typography>
              <Typography
                sx={{
                  paddingLeft: 2,
                  fontSize: 13,
                  fontWeight: "light",
                  color: "grey",
                }}
              >
                Promoted
              </Typography>
            </Box>
          </Box>
          <BookmarkBorderIcon sx={{ paddingLeft: 2, color: "grey" }} />
        </Box>

        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
      </div>

      <FlipMove>
        <Divider sx={{ paddingBottom: 2 }} />
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

export default JobsFeed;
