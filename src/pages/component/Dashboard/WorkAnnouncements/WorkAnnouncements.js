import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const WorkAnnouncements = () => {
  return (
    <Box sx={{ border: "1px solid black", marginTop: "20px" }}>
      <Typography
        variant="h6"
        sx={{ padding: "10px", backgroundColor: "#E3F4F4" }}
      >
        Work Announcements
      </Typography><hr style={{margin: '0'}}/>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: '13px'
          }}
        >
          <Typography sx={{fontWeight: '600'}}>Work Type</Typography>
          <Typography sx={{fontWeight: '600'}}>Name of Worker</Typography>
        </Box><hr style={{margin: 0}} />
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Marketing Service</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Wordpress Developer</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Software Engenieer</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Front End Developer</Typography>
                <Typography sx={{padding: '10px 10px 15px 13px'}}>Back End Developer</Typography>
            </Box>
            <Box>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Clark Smith</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Susanto Paul</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Mahmud Iqbal</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Wasiful Islam</Typography>
                <Typography sx={{padding: '10px 10px 15px 13px'}}>Shahidul Alam</Typography>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkAnnouncements;
