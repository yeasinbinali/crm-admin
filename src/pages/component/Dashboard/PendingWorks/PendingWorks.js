import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PendingIcon from "@mui/icons-material/Pending";
import { Button } from "@mui/base";

const PendingWorks = () => {
  return (
    <Box sx={{ border: "1px solid black", marginTop: "20px" }}>
      <Typography
        variant="h6"
        sx={{ padding: "10px", backgroundColor: "#E3F4F4" }}
      >
        Pending Works
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 15px 0 15px",
        }}
      >
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center", fontWeight: "700" }}
          >
            <PendingIcon sx={{ color: "red", marginRight: "5px" }} />
            Database Tools{" "}
          </Box>
          <Typography sx={{ fontSize: "14px" }}>
            August 29, 2022 for James
          </Typography>
        </Box>
        <Tooltip title='65%'><Button size="small">Progressing</Button></Tooltip>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 15px 0 15px",
        }}
      >
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center", fontWeight: "700" }}
          >
            <PendingIcon sx={{ color: "red", marginRight: "5px" }} />
            Web Development{" "}
          </Box>
          <Typography sx={{ fontSize: "14px" }}>
            September 13, 2022 for Pathan
          </Typography>
        </Box>
        <Tooltip title='17%'><Button size="small">Failed</Button></Tooltip>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 15px 0 15px",
        }}
      >
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center", fontWeight: "700" }}
          >
            <PendingIcon sx={{ color: "red", marginRight: "5px" }} />
            Apps Development{" "}
          </Box>
          <Typography sx={{ fontSize: "14px" }}>
            December 31, 2022 for Harsha
          </Typography>
        </Box>
        <Tooltip title='84%'><Button size="small">Processing</Button></Tooltip>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 15px 0 15px",
        }}
      >
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center", fontWeight: "700" }}
          >
            <PendingIcon sx={{ color: "red", marginRight: "5px" }} />
            Technological Tools{" "}
          </Box>
          <Typography sx={{ fontSize: "14px" }}>
            February 5, 2023 for Yaju
          </Typography>
        </Box>
        <Tooltip title='54%'><Button size="small">Progressing</Button></Tooltip>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 15px 20px 15px",
        }}
      >
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center", fontWeight: "700" }}
          >
            <PendingIcon sx={{ color: "red", marginRight: "5px" }} />
            Digital Marketing{" "}
          </Box>
          <Typography sx={{ fontSize: "14px" }}>
            April, 2023 for Axar
          </Typography>
        </Box>
        <Tooltip title='69%'><Button size="small">Progressing</Button></Tooltip>
      </Box>
    </Box>
  );
};

export default PendingWorks;
