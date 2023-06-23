import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const DashboardCard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ backgroundColor: "#0097a7", padding: '20px 10px' }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Diversity1Icon sx={{ color: "white", fontSize: '50px' }} />
              <Typography sx={{ color: "white", fontSize: '20px', fontWeight: '900' }}>
                11 <ArrowDropUpIcon />
              </Typography>
            </Box>
            <Typography sx={{ color: "white" }} variant="h5">
              Active Client
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ backgroundColor: "#0097a7", padding: '20px 10px' }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <SupervisorAccountIcon sx={{ color: "white", fontSize: '50px' }} />
              <Typography sx={{ color: "white", fontSize: '20px', fontWeight: '900' }}>
                4 <ArrowDropUpIcon />
              </Typography>
            </Box>
            <Typography sx={{ color: "white" }} variant="h5">
              Active Admin
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ backgroundColor: "#0097a7", padding: '20px 10px' }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <LocalAtmIcon sx={{ color: "white", fontSize: '50px' }} />
              <Typography sx={{ color: "white", fontSize: '20px', fontWeight: '900' }}>
                $ 965 <ArrowDropUpIcon />
              </Typography>
            </Box>
            <Typography sx={{ color: "white" }} variant="h5">
              Expenses
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ backgroundColor: "#0097a7", padding: '20px 10px' }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <DeveloperBoardIcon sx={{ color: "white", fontSize: '50px' }} />
              <Typography sx={{ color: "white", fontSize: '20px', fontWeight: '900' }}>
                32 <ArrowDropUpIcon />
              </Typography>
            </Box>
            <Typography sx={{ color: "white" }} variant="h5">
              Projects
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardCard;
