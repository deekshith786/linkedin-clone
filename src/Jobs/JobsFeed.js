import React, { useEffect, useState } from "react";
import "../feed/Feed.css";
import { db } from "../config/firebase";
import firebase from "firebase/compat/app";
import {
  collection,
  query,
  where,
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
  // const user = useSelector(selectUser);
  // const [input, setInput] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let cities = [];
    const q = query(collection(db, "jobs"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      console.log("orinting the jobs", cities);
      setJobs(cities);
    });
  }, []);

  // const sendPost = (e) => {
  //   /**to prevent refresh when click enter */
  //   e.preventDefault();

  //   db.collection("jobs").add({
  //     name: user.displayName,
  //     description: user.email,
  //     message: input,
  //     photoUrl: user.photoUrl || "",
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  //   setInput("");
  // };

  // "company"=  "Amazon"
  // "img"=  "https://media.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1686182400&v=beta&t=Vh06CPtEBo_HZsRB5mbYOvqnoLcQmpggC_CxBLFnk3I"
  // "jobType"=  "Suggested"
  // "location"=  "Hyderabad, Telangana, India"
  // "recruting"=  "Actively recruting"
  // "title"=  "AWS Developer"

  return (
    <div className="networkfeed">
      <div className="networkfeed__inputContainer">
        <div className="network__celebrations">
          <h3>Recent job searches</h3>
          <Typography sx={{ fontWeight: "light" }}>clear</Typography>
        </div>
        <b>Software Engineer · <span style={{color:'green', fontSize:'12px'}}>437 new</span>  </b>
        <Typography sx={{ fontWeight: "light", fontSize: "12px", color:'gray' }}>
          Alert On · Hyderabad, Telangana, India · On-site · Hybrid
        </Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <b>Software Engineer · <span style={{color:'green', fontSize:'12px'}}>120 new</span></b>
        <Typography sx={{ fontWeight: "light", fontSize: "12px", color:'gray' }}>
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

        {jobs.map((item, i) => {
          return (
            <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: '1px solid lightgrey', paddingBottom:3, paddingTop:3}}>
              <Box sx={{ display: "flex"}}>
                <img
                  src={item.img}
                  alt=""
                  width={50}
                  height={50}
                />
                <Box>
                  <Typography
                    sx={{
                      paddingLeft: 2,
                      fontWeight: "bold",
                      color: "#0a66c2",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ paddingLeft: 2, fontSize: 13 }}>
                    {item.company}
                  </Typography>
                  <Typography
                    sx={{
                      paddingLeft: 2,
                      fontSize: 13,
                      fontWeight: "light",
                      color: "grey",
                    }}
                  >
                    {item.location}
                  </Typography>
                  <Typography
                    sx={{
                      paddingLeft: 2,
                      fontSize: 13,
                      fontWeight: "light",
                      color: "grey",
                    }}
                  >
                    {item.recruting}
                  </Typography>
                  <Typography
                    sx={{
                      paddingLeft: 2,
                      fontSize: 13,
                      fontWeight: "light",
                      color: "grey",
                    }}
                  >
                    {item.jobType}
                  </Typography>
                </Box>
              </Box>
              <BookmarkBorderIcon sx={{ paddingLeft: 2, color: "grey" }} />
            </Box>
          );
        })}

      </div>

    </div>
  );
}

export default JobsFeed;