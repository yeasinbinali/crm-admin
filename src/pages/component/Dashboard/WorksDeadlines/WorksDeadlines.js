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
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 15px 0 15px', textAlign: 'center'}}>
          <Typography>Task</Typography>
          <Typography>End Deadline</Typography>
      </Box><hr />
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 15px 0 15px'}}>
          <Typography>Phython Development</Typography>
          <Typography>23 July, 2023</Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 15px 0 15px'}}>
          <Typography>Java Development</Typography>
          <Typography>3 August, 2023</Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 15px 0 15px'}}>
          <Typography>Javascript Development</Typography>
          <Typography>17 October, 2023</Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 15px 0 15px'}}>
          <Typography>React Development</Typography>
          <Typography>28 October, 2023</Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 15px 0 15px'}}>
          <Typography>Wordpress Development</Typography>
          <Typography>5 November, 2023</Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 15px 38px 15px'}}>
          <Typography>UI/UX Designer</Typography>
          <Typography>10 December, 2023</Typography>
      </Box>
    </Box>
  );
};

export default WorksDeadlines;
