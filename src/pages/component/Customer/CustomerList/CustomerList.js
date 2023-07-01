import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import React from "react";
import { useLoaderData } from "react-router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CustomerList = () => {
  const customers = useLoaderData({});
  console.log(customers);
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
          marginBottom: "20px",
        }}
        variant="h5"
      >
        <GroupAddIcon sx={{ marginRight: "3px" }} />
        Customer List
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {/* hello */}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CustomerList;
