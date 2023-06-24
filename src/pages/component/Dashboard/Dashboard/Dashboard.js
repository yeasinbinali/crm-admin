import React from "react";
import DashboardCard from "../DashboardCard/DashboardCard";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import Grid from "@mui/material/Grid";
import RunningProjects from "../RunningProjects/RunningProjects";
import PendingWorks from "../PendingWorks/PendingWorks";
import WorksDeadlines from "../WorksDeadlines/WorksDeadlines";
import WorkAnnouncements from "../WorkAnnouncements/WorkAnnouncements";
import NoticeBoard from "../NoticeBoard/NoticeBoard";

const Dashboard = () => {
  return (
    <div>
      <DashboardCard></DashboardCard>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <UpcomingEvents></UpcomingEvents>
        </Grid>
        <Grid item xs={12} md={6}>
          <RunningProjects></RunningProjects>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <PendingWorks></PendingWorks>
        </Grid>
        <Grid item xs={12} md={6}>
          <WorksDeadlines></WorksDeadlines>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <WorkAnnouncements></WorkAnnouncements>
        </Grid>
        <Grid item xs={12} md={6}>
          <NoticeBoard></NoticeBoard>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
