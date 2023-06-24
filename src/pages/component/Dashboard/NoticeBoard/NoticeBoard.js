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
      </Typography><hr style={{margin: '0'}}/>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: '13px 50px 13px 15px'
          }}
        >
          <Typography sx={{fontWeight: '600'}}>Notice</Typography>
          <Typography sx={{fontWeight: '600'}}>Published by</Typography>
          <Typography sx={{fontWeight: '600'}}>Date</Typography>
        </Box><hr style={{margin: 0}} />
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Holiday</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Joining</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Joining</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Tour PT</Typography>
                <Typography sx={{padding: '10px 10px 15px 13px'}}>Holiday</Typography>
            </Box>
            <Box>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Md Jahid</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Md Sohel</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Md Juwel</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>Md Tamim</Typography>
                <Typography sx={{padding: '10px 10px 15px 13px'}}>Md Mirza</Typography>
            </Box>
            <Box>
                <Typography sx={{padding: '10px 10px 0 13px'}}>March 3</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>June 12</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>August 20</Typography>
                <Typography sx={{padding: '10px 10px 0 13px'}}>October 31</Typography>
                <Typography sx={{padding: '10px 10px 15px 13px'}}>December 2</Typography>
            </Box>
        </Box>
      </Box>      
    </Box>
  );
};

export default NoticeBoard;
