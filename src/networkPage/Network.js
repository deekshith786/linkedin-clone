// import React from 'react'
// import '../networkPage/Network.css'


// import { Avatar } from "@mui/material";
// import React from "react";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";


// function Network() {


//   const user = useSelector(selectUser);

//   const recentItem = (topic) => (
//     <div className="sidebar__recentItem">
//       <span className="sidebar__hash">#</span>
//       <p>{topic}</p>
//     </div>
//   );

//   const min = 1;
//   const max = 500;
//   const random1 = Math.floor(Math.random() * (max - min + 1)) + min;
//   const random2 = Math.floor(Math.random() * (max - min + 1)) + min;

//   return (
//     <div className="sidebar">
//       {/* <div className="sidebar__top">
//         <img
//           src="https://images.unsplash.com/photo-1579546929742-63e9b6b4fc56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
//           alt=""
//         />
//         <Avatar src={user.photoUrl} className="sidebar__avatar">
//           {user.email[0]}
//         </Avatar>
//         <h2>{user.displayName}</h2>
//         <h4>{user.email}</h4>
//       </div> */}

//       <div className="sidebar__stats">
//         <div className="sidebar__stat">
//           <p>Who viewed you</p>
//           <p className="sidebar__statNumber">{random1}</p>
//         </div>
//         <div className="sidebar__stat">
//           <p>Views on post</p>
//           <p className="sidebar__statNumber">{random2}</p>
//         </div>
//       </div>      
//       <div className="sidebar__bottom">
//         <p>Recent</p>
//         {recentItem("reactjs")}
//         {recentItem("programming")}
//         {recentItem("softwareengineering")}
//         {recentItem("design")}
//         {recentItem("developer")}
//       </div>
//     </div>
//   );
// }

// export default Network



import React from 'react'

function Network() {
  return (
    <div>
      <h1>network page</h1>
    </div>
  )
}

export default Network
