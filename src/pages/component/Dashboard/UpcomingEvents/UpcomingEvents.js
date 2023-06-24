import React from "react";
import { Tooltip, Typography } from "@mui/material";
import { Button } from "@mui/base";
import { Box } from "@mui/system";

const UpcomingEvents = () => {
  return (
    <Box sx={{ border: "1px solid black", marginTop: "20px" }}>
      <Typography
        variant="h6"
        sx={{ padding: "10px", backgroundColor: "#E3F4F4" }}
      >
        Upcoming Events
      </Typography>
      <hr style={{ margin: "0" }} />
      <Box
        sx={{
          marginTop: "10px",
          padding: "0px 10px 5px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          28 <Typography>April</Typography>
        </Box>
        <Box>
          Management Policy{" "}
          <Typography sx={{ fontSize: "14px" }}>Dhaka, Bangladesh</Typography>
        </Box>
        <Box>
          <Tooltip title="Janata Bank Ltd.">
            <Button size="small">Email</Button>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="+927329283">
            <Button size="small">Cell</Button>
          </Tooltip>
        </Box>
      </Box><hr/>
      <Box
        sx={{
          marginTop: "10px",
          padding: "0px 10px 5px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          16 <Typography>May</Typography>
        </Box>
        <Box>
          Networking Policy{" "}
          <Typography sx={{ fontSize: "14px" }}>Toronto, Canada</Typography>
        </Box>
        <Box>
          <Tooltip title="Sonali Bank Ltd.">
            <Button size="small">Email</Button>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="+927329283">
            <Button size="small">Cell</Button>
          </Tooltip>
        </Box>
      </Box><hr/>
      <Box
        sx={{
          marginTop: "10px",
          padding: "0px 10px 5px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          30 <Typography>June</Typography>
        </Box>
        <Box>
          Accounting Policy{" "}
          <Typography sx={{ fontSize: "14px" }}>Sydney, Australia</Typography>
        </Box>
        <Box>
          <Tooltip title="East Bank Ltd.">
            <Button size="small">Email</Button>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="+927329283">
            <Button size="small">Cell</Button>
          </Tooltip>
        </Box>
      </Box><hr/>
      <Box
        sx={{
          marginTop: "10px",
          padding: "0px 10px 15px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          13 <Typography>July</Typography>
        </Box>
        <Box>
          Customizing Policy{" "}
          <Typography sx={{ fontSize: "14px" }}>Delhi, India</Typography>
        </Box>
        <Box>
          <Tooltip title="Southern Bank Ltd.">
            <Button size="small">Email</Button>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="+927329283">
            <Button size="small">Cell</Button>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default UpcomingEvents;
