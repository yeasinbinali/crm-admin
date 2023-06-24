import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tooltip, Typography } from "@mui/material";
import { Button } from "@mui/base";
import { Box } from "@mui/system";

const RunningProjects = () => {
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><Typography>Upcoming Events</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
              <TableCell sx={{padding: '10px 20px'}}><Box sx={{border: '1px solid gray', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px', backgroundColor: 'black', color: 'white'}}>28 <Typography>April</Typography></Box></TableCell>
              <TableCell sx={{padding: '10px 20px'}}>Marketing Policy <Typography>Green Road - Dhaka, Bangladesh</Typography></TableCell>
              <TableCell sx={{padding: '10px 20px'}}><Tooltip title="Janata Bank Ltd."><Button size="small">Email</Button></Tooltip></TableCell>
          </TableRow>
          <TableRow>
              <TableCell sx={{padding: '10px 20px'}}><Box sx={{border: '1px solid gray', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px', backgroundColor: 'black', color: 'white'}}>12 <Typography>May</Typography></Box></TableCell>
              <TableCell sx={{padding: '10px 20px'}}>Accounting Policy <Typography>Kolkata, India</Typography></TableCell>
              <TableCell sx={{padding: '10px 20px'}}><Tooltip title="Southern Bank Ltd."><Button size="small">Email</Button></Tooltip></TableCell>
          </TableRow>
          <TableRow>
              <TableCell sx={{padding: '10px 20px'}}><Box sx={{border: '1px solid gray', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px', backgroundColor: 'black', color: 'white'}}>20<Typography>June</Typography></Box></TableCell>
              <TableCell sx={{padding: '10px 20px'}}>Management Policy <Typography>Madrid, Spain</Typography></TableCell>
              <TableCell sx={{padding: '10px 20px'}}><Tooltip title="Sonali Bank Ltd."><Button size="small">Email</Button></Tooltip></TableCell>
          </TableRow>
          <TableRow>
              <TableCell sx={{padding: '10px 20px'}}><Box sx={{border: '1px solid gray', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px', backgroundColor: 'black', color: 'white'}}>18 <Typography>July</Typography></Box></TableCell>
              <TableCell sx={{padding: '10px 20px'}}>Finance Policy <Typography>Melborne, Australia</Typography></TableCell>
              <TableCell sx={{padding: '10px 20px'}}><Tooltip title="East Bank Ltd."><Button size="small">Email</Button></Tooltip></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default RunningProjects;