import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { padding } from "@mui/system";
import React, { forwardRef } from "react";
import InputOption from "../inputOption/InputOption";
import "../post/Post.css";

const Invites = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="invites__header">
        <Box sx={{ display: "flex", gap: 2 }}>
          <Avatar src={photoUrl}>{name[0]}</Avatar>
          <div className="invites__info">
            <Box>
              <h2>{name}</h2>
              <p>{description}</p>
            </Box>
          </div>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ paddingTop: 1, paddingRight: 2, fontWeight: "500" }}
          >
            Ignore
          </Typography>
          <Button variant="outlined" sx={{ borderRadius: "50px" }}>
            Accept
          </Button>
        </Box>
      </div>
    </div>
  );
});

export default Invites;
