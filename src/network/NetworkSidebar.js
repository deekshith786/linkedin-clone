import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "../network/NetworkSidebar.css";
import GroupIcon from "@mui/icons-material/Group";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import TodayIcon from '@mui/icons-material/Today';
import DescriptionIcon from '@mui/icons-material/Description';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TagIcon from '@mui/icons-material/Tag';

function NetworkSidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="networksidebar__recentItem">
      <span className="networksidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const min = 1;
  const max = 500;
  const random1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const random2 = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="networksidebar">
      <div className="networksidebar__stats">
        <div className="networksidebar__stat">
          <GroupIcon />
          <p>Connections</p>
          <p className="networksidebar__statNumber">{random1}</p>
        </div>
        <div className="networksidebar__stat">
          <ContactPageIcon/>
          <p>Contacts</p>
          <p className="networksidebar__statNumber">{random2}</p>
        </div>
        <div className="networksidebar__stat">
          <PersonIcon/>
          <p>Following & follwers</p>
          <p className="networksidebar__statNumber">{random2}</p>
        </div>
        <div className="networksidebar__stat">
          <GroupsIcon/>
          <p>Groups</p>
          <p className="networksidebar__statNumber">{random2}</p>
        </div>
        <div className="networksidebar__stat">
          <TodayIcon/>
          <p>Event</p>
          <p className="networksidebar__statNumber">{random2}</p>
        </div>
        <div className="networksidebar__stat">
          <DescriptionIcon/>
          <p>Pages</p>
          <p className="networksidebar__statNumber">{random2}</p>
        </div>
        <div className="networksidebar__stat">
          <NewspaperIcon/>
          <p>Newsletters</p>
          <p className="networksidebar__statNumber">{random2}</p>
        </div>
        <div className="networksidebar__stat">
          <TagIcon/>
          <p>Hashtags</p>
          <p className="networksidebar__statNumber">{random2}</p>
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
