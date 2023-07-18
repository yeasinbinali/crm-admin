import React from "react";
import { Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import { Link } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";

const PublicHoliday = () => {
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
        <HolidayVillageIcon sx={{ marginRight: "3px" }} />
        Public Holiday
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={3}
        >
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <DateRangeOutlinedIcon sx={{ marginRight: "3px" }} />
            January
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <DateRangeOutlinedIcon sx={{ marginRight: "3px" }} />
            February
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <DateRangeOutlinedIcon />
            March
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <DateRangeOutlinedIcon sx={{ marginRight: "3px" }} />
            April
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <DateRangeOutlinedIcon sx={{ marginRight: "3px" }} />
            May
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <DateRangeOutlinedIcon sx={{ marginRight: "3px" }} />
            June
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <DateRangeOutlinedIcon sx={{ marginRight: "3px" }} />
            July
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <DateRangeOutlinedIcon sx={{ marginRight: "3px" }} />
            August
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <DateRangeOutlinedIcon sx={{ marginRight: "3px" }} />
            September
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <DateRangeOutlinedIcon sx={{ marginRight: "3px" }} />
            October
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <DateRangeOutlinedIcon sx={{ marginRight: "3px" }} />
            November
          </Link>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "black",
              marginBottom: "10px",
            }}
          >
            <DateRangeOutlinedIcon sx={{ marginRight: "3px" }} />
            December
          </Link>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography>Table</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PublicHoliday;
