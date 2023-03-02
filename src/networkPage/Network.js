import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import Feed from "../feed/Feed";
import Header from "../Header";
import Login from "../login/Login";
import Sidebar from "../sidebar/Sidebar";
import Widgets from "../widgets/Widgets";
import { auth } from "../config/firebase";
import { login, logout, selectUser } from "../features/userSlice";
import NetworkSidebar from "../network/NetworkSidebar";

function Network() {

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
            <Feed />
          </div>
        )}
      </div>
    );
  }

export default Network;
