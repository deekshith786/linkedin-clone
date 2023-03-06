import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SmsIcon from "@mui/icons-material/Sms";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./config/firebase";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Header() {
  const dispach = useDispatch();
  const user = useSelector(selectUser);

  const logoutOfApp = () => {
    dispach(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <Link to="/">
          <a>
            <HeaderOption Icon={HomeIcon} title="Home" />
          </a>
        </Link>
        <Link to="/network">
          <a>
            <HeaderOption Icon={GroupIcon} title="Network" />
          </a>
        </Link>
        <Link to="/jobs">
          <a>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          </a>
        </Link>
        <Link to="/notifications">
          <a>
            <HeaderOption Icon={SmsIcon} title="Messages" />
          </a>
        </Link>
        <Link to="/notifications">
          <a>
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          </a>
        </Link>

        <HeaderOption title="Me" onClick={logoutOfApp} avatar={true} />
      </div>
    </div>
  );
}

export default Header;
