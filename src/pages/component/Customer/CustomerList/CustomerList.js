import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import React from "react";
import { useLoaderData } from "react-router";

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
        <Table aria-label="simple table">
          <TableHead sx={{ background: "#E3F4F4" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "600", color: "#1C315E" }}>
                Photo
              </TableCell>
              <TableCell sx={{ fontWeight: "600", color: "#1C315E" }}>
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: "600", color: "#1C315E" }}>
                Mobile
              </TableCell>
              <TableCell sx={{ fontWeight: "600", color: "#1C315E" }}>
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: "600", color: "#1C315E" }}>
                Address
              </TableCell>
              <TableCell sx={{ fontWeight: "600", color: "#1C315E" }}>
                Sex
              </TableCell>
              <TableCell sx={{ fontWeight: "600", color: "#1C315E" }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers
              .slice(0)
              .reverse()
              .map((customer) => (
                <TableRow key={customer._id}>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      marginLeft: "10px",
                      marginTop: "4px",
                      borderRadius: "50%",
                    }}
                    src={`${customer.image}`}
                    alt=""
                  />
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.mobile}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.address}</TableCell>
                  <TableCell>{customer.sex}</TableCell>
                  <TableCell>{customer.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CustomerList;
