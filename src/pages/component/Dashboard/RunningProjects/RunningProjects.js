import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box } from "@mui/system";
import { Tooltip, Typography } from "@mui/material";
import AlbumIcon from "@mui/icons-material/Album";
import { Button } from "@mui/base";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const RunningProjects = () => {
  return (
    <Box sx={{ border: "1px solid black", marginTop: "20px" }}>
      <Typography
        variant="h6"
        sx={{ padding: "10px", backgroundColor: "#E3F4F4" }}
      >
        Running Projects
      </Typography>
      <hr style={{ margin: "0" }} />
      <Box>
        <Box sx={{ padding: "0px 10px 5px 10px", marginTop: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <AlbumIcon />
              Data Configuration
            </Typography>
            <Button size="small">Failed</Button>
          </Box>
          <Tooltip title="50%">
            <BorderLinearProgress
              sx={{ margin: "6px 0" }}
              variant="determinate"
              value={50}
            />
          </Tooltip>
        </Box>
        <hr style={{ margin: "0" }} />
        <Box sx={{ padding: "0px 10px 5px 10px", marginTop: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <AlbumIcon />
              Design Tool
            </Typography>
            <Button size="small">Progessing</Button>
          </Box>
          <Tooltip title="75%">
            <BorderLinearProgress
              sx={{ margin: "6px 0" }}
              variant="determinate"
              value={75}
            />
          </Tooltip>
        </Box>
        <hr style={{ margin: "0" }} />
        <Box sx={{ padding: "0px 10px 5px 10px", marginTop: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <AlbumIcon />
              Internet Configuration
            </Typography>
            <Button size="small">Progressing</Button>
          </Box>
          <Tooltip title="38%">
            <BorderLinearProgress
              sx={{ margin: "6px 0" }}
              variant="determinate"
              value={38}
            />
          </Tooltip>
        </Box>
        <hr style={{ margin: "0" }} />
        <Box sx={{ padding: "0px 10px 5px 10px", marginTop: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <AlbumIcon />
              Banner Completation
            </Typography>
            <Button size="small">Progressing</Button>
          </Box>
          <Tooltip title="21%">
            <BorderLinearProgress
              sx={{ margin: "6px 0" }}
              variant="determinate"
              value={21}
            />
          </Tooltip>
        </Box>
        <hr style={{ margin: "0" }} />
        <Box sx={{ padding: "0px 10px 5px 10px", marginTop: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <AlbumIcon />
              IT Solution
            </Typography>
            <Button size="small">Success</Button>
          </Box>
          <Tooltip title="98%">
            <BorderLinearProgress
              sx={{ margin: "7px 0" }}
              variant="determinate"
              value={98}
            />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default RunningProjects;
