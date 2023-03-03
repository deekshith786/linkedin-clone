import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import Header from "../Header";
import Login from "../login/Login";
import { auth } from "../config/firebase";
import { login, logout, selectUser } from "../features/userSlice";
import NetworkSidebar from "../network/NetworkSidebar";
import JobsFeed from "./JobsFeed";
import JobWidgets from "./JobWidgets";

function Jobs() {
  const user = useSelector(selectUser);

  const dispach = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispach(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispach(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <NetworkSidebar />
          <JobsFeed />
          <JobWidgets />
        </div>
      )}
    </div>
  );
}

export default Jobs;
