import { Container } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Finance from "../Finance/Finance";
import Account from "../Account/Account";
import HumanResource from "../HumanResource/HumanResource";
import InformationTechnology from "../InformationTechnology/InformationTechnology";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";

const Department = () => {
  return (
    <Container>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          background: "#0097a7",
          color: "white",
          padding: "10px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
        variant="h5"
      >
        <RoomPreferencesIcon sx={{ marginRight: "3px" }} />
        Departments
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Finance></Finance>
        </Grid>
        <Grid item xs={12} md={6}>
          <Account></Account>
        </Grid>
        <Grid item xs={12} md={6}>
          <HumanResource></HumanResource>
        </Grid>
        <Grid item xs={12} md={6}>
          <InformationTechnology></InformationTechnology>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Department;
