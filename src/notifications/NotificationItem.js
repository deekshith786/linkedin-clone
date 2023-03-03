import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import "../post/Post.css";

const NotificationItem = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="invites__header">
        <Box sx={{ display: "flex", gap: 2 }}>
          <Avatar src={photoUrl}>{name[0]}</Avatar>
          <Box className="notification__info" sx={{display:'flex'}}>
            <Box>
              {/* <h2>{name}</h2> */}
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </Box>
          </Box>
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
});

export default NotificationItem;
