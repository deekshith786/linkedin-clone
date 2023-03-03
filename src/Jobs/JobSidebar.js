import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "../network/NetworkSidebar.css";
import GroupIcon from "@mui/icons-material/Group";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import TodayIcon from "@mui/icons-material/Today";
import DescriptionIcon from "@mui/icons-material/Description";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TagIcon from "@mui/icons-material/Tag";

function NetworkSidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="networksidebar__recentItem">
      <span className="networksidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const random = () => {
    const min = 1;
    const max = 500;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="networksidebar">
      <div className="networksidebar__stats">
        <div className="networksidebar__stat">
          <div className="networksidebar__icons">
            <GroupIcon />
            <p>Connections</p>
          </div>
          <p className="networksidebar__statNumber">{random()}</p>
        </div>
        <div className="networksidebar__stat">
          <div className="networksidebar__icons">
            <ContactPageIcon />
            <p>Contacts</p>
          </div>
          <p className="networksidebar__statNumber">{random()}</p>
        </div>

        <div className="networksidebar__stat">
          <div className="networksidebar__icons">
            <PersonIcon />
            <p>Following</p>
          </div>
          <p className="networksidebar__statNumber">{random()}</p>
        </div>

        <div className="networksidebar__stat">
          <div className="networksidebar__icons">
            <GroupsIcon />
            <p>Groups</p>
          </div>
          <p className="networksidebar__statNumber">{random()}</p>
        </div>
        <div className="networksidebar__stat">
          <div className="networksidebar__icons">
            <TodayIcon />
            <p>Event</p>
          </div>
          <p className="networksidebar__statNumber">{random()}</p>
        </div>
        <div className="networksidebar__stat">
          <div className="networksidebar__icons">
            <DescriptionIcon />
            <p>Pages</p>
          </div>
          <p className="networksidebar__statNumber">{random()}</p>
        </div>
        <div className="networksidebar__stat">
          <div className="networksidebar__icons">
            <NewspaperIcon />
            <p>Newsletters</p>
          </div>
          <p className="networksidebar__statNumber">{random()}</p>
        </div>
        <div className="networksidebar__stat">
          <div className="networksidebar__icons">
            <TagIcon />
            <p>Hashtags</p>
          </div>
          <p className="networksidebar__statNumber">{random()}</p>
        </div>
      </div>
      <div className="networksidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default NetworkSidebar;
