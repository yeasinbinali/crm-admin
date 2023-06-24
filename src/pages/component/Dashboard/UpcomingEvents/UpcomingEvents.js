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

const UpcomingEvents = () => {
  return (
    <TableContainer sx={{overflow: 'hidden', marginTop: '20px', border: '1px solid black'}} component={Paper}>
      <Table sx={{ minWidth: '820px' }} aria-label="simple table">
        <TableHead sx={{backgroundColor: '#E3F4F4'}}>
          <TableRow>
            <TableCell><Typography variant='h6'>Upcoming Events</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{display: 'flex', alignItems: 'center'}}>
              <Box sx={{padding: '10px 20px'}}><Box sx={{border: '1px solid gray', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px', backgroundColor: 'black', color: 'white'}}>28 <Typography>April</Typography></Box></Box>
              <Box sx={{padding: '10px 20px'}}>Management Policy <Typography sx={{fontSize: '14px'}}>Dhaka, Bangladesh</Typography></Box>
              <Box sx={{padding: '10px 20px'}}><Tooltip title="Janata Bank Ltd."><Button size="small">Email</Button></Tooltip></Box>
              <Box sx={{padding: '10px 20px'}}><Tooltip title="+92732928"><Button size="small">Cell</Button></Tooltip></Box>
          </TableRow>
          <TableRow sx={{display: 'flex', alignItems: 'center'}}>
              <Box sx={{padding: '10px 20px'}}><Box sx={{border: '1px solid gray', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px', backgroundColor: 'black', color: 'white'}}>16 <Typography>May</Typography></Box></Box>
              <Box sx={{padding: '10px 20px'}}>Management Policy <Typography sx={{fontSize: '14px'}}>Kolkata, India</Typography></Box>
              <Box sx={{padding: '10px 20px'}}><Tooltip title="Janata Bank Ltd."><Button size="small">Email</Button></Tooltip></Box>
              <Box sx={{padding: '10px 20px'}}><Tooltip title="+92732928"><Button size="small">Cell</Button></Tooltip></Box>
          </TableRow>
          <TableRow sx={{display: 'flex', alignItems: 'center'}}>
              <Box sx={{padding: '10px 20px'}}><Box sx={{border: '1px solid gray', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px', backgroundColor: 'black', color: 'white'}}>21 <Typography>June</Typography></Box></Box>
              <Box sx={{padding: '10px 20px'}}>Management Policy <Typography sx={{fontSize: '14px'}}>Toronto, Canada</Typography></Box>
              <Box sx={{padding: '10px 20px'}}><Tooltip title="Janata Bank Ltd."><Button size="small">Email</Button></Tooltip></Box>
              <Box sx={{padding: '10px 20px'}}><Tooltip title="+92732928"><Button size="small">Cell</Button></Tooltip></Box>
          </TableRow>
          <TableRow sx={{display: 'flex', alignItems: 'center'}}>
              <Box sx={{padding: '10px 20px'}}><Box sx={{border: '1px solid gray', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50px', backgroundColor: 'black', color: 'white'}}>10 <Typography>July</Typography></Box></Box>
              <Box sx={{padding: '10px 20px'}}>Management Policy <Typography sx={{fontSize: '14px'}}>Melborne, Australia</Typography></Box>
              <Box sx={{padding: '10px 20px'}}><Tooltip title="Janata Bank Ltd."><Button size="small">Email</Button></Tooltip></Box>
              <Box sx={{padding: '10px 20px'}}><Tooltip title="+92732928"><Button size="small">Cell</Button></Tooltip></Box>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UpcomingEvents;
