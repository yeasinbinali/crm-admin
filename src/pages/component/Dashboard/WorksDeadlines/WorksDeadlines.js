import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const WorksDeadlines = () => {
  return (
    <Box sx={{ border: "1px solid black", marginTop: "20px" }}>
      <Typography
        variant="h6"
        sx={{ padding: "10px", backgroundColor: "#E3F4F4" }}
      >
        Pending Works
      </Typography>
    </Box>
  );
};

export default WorksDeadlines;
