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

function Network() {

    const user = useSelector(selectUser);

    const dispach = useDispatch();
  

  
    return (
      <div className="app">
        <Header />
  
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )}
      </div>
    );
  }

export default Network;
