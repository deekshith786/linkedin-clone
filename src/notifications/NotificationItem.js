import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import "../post/Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const NotificationItem = forwardRef(
  ({ name, description, message, photoUrl }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="invites__header">
          <Box sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}>
            <Box className="notification__info" sx={{ display: "flex" }}>
              <Avatar src={photoUrl}>{name[0]}</Avatar>
              <Typography sx={{padding:1}}>{description}</Typography>
            </Box>
          </Box>
              <Box>
                <Typography sx={{fontSize:'12px', color:'gray'}}>12hr</Typography>
                <MoreHorizIcon sx={{color:'gray'}}/>
              </Box>
          {/* <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ paddingTop: 1, paddingRight: 2, fontWeight: "500" }}
          >
            Ignore
          </Typography>
          <Button variant="outlined" sx={{ borderRadius: "50px" }}>
            Accept
          </Button>
        </Box> */}
        </div>
      </div>
    );
  }
);

export default NotificationItem;
