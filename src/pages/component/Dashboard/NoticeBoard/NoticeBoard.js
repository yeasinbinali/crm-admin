import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NoticeBoard = () => {
  return (
    <Box sx={{ border: "1px solid black", marginTop: "20px" }}>
      <Typography
        variant="h6"
        sx={{ padding: "10px", backgroundColor: "#E3F4F4" }}
      >
        Notice Board
      </Typography>
    </Box>
  );
};

export default NoticeBoard;
