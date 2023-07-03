import { Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Deposit = () => {
  const deposits = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const depositDetails = {
      account: data.account,
      date: data.date,
      description: data.description,
      amount: data.amount,
    };
    fetch("http://localhost:5000/deposit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(depositDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("New deposit added");
          reset();
          window.location.reload(false);
        }
      });
  };
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
        <AccountBalanceIcon sx={{ marginRight: "3px" }} />
        Deposit
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <form
            style={{
              background: "whitesmoke",
              borderRadius: "5px",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography
              sx={{ backgroundColor: "#E3F4F4", padding: "5px 0 5px 20px" }}
              variant="h6"
            >
              Add Deposit
            </Typography>
            <div style={{ padding: "10px 20px 20px 20px" }}>
              <div style={{ marginBottom: "10px" }}>
                <label
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#1C315E",
                  }}
                >
                  Account
                </label>
                <br />
                <select
                  style={{
                    width: "100%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  {...register("account")}
                >
                  <option value="Bank of Asia">Bank of Asia</option>
                  <option value="Brac Bank">Brac Bank</option>
                  <option value="Sonali Bank">Sonali Bank</option>
                  <option value="Rupali Bank">Rupali Bank</option>
                  <option value="Grameen Bank">Grameen Bank</option>
                </select>
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#1C315E",
                  }}
                >
                  Date
                </label>
                <br />
                <input
                  type="date"
                  name="date"
                  style={{
                    width: "100%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  placeholder="date"
                  {...register("date", { required: true })}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#1C315E",
                  }}
                >
                  Description
                </label>
                <br />
                <input
                  name="description"
                  style={{
                    width: "100%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  placeholder="Enter short description"
                  {...register("description", {
                    required: true,
                    maxLength: 10,
                  })}
                />
                {errors.description?.type === "maxLength" && (
                  <p
                    style={{ color: "red", margin: "0", fontSize: "14px" }}
                    role="alert"
                  >
                    Max length 10
                  </p>
                )}
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#1C315E",
                  }}
                >
                  Amount
                </label>
                <br />
                <input
                  type="number"
                  name="amount"
                  style={{
                    width: "100%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  placeholder="$ Enter amount"
                  {...register("amount", { required: true })}
                />
              </div>
              <div>
                <input
                  style={{
                    cursor: "pointer",
                    marginRight: "20px",
                    background: "#1C315E",
                    border: "none",
                    color: "white",
                    padding: "5px 20px",
                    fontSize: "16px",
                  }}
                  type="reset"
                />
                <input
                  style={{
                    cursor: "pointer",
                    marginRight: "20px",
                    background: "#0097a7 ",
                    border: "none",
                    color: "white",
                    padding: "5px 20px",
                    fontSize: "16px",
                  }}
                  type="submit"
                />
              </div>
            </div>
          </form>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            sx={{ backgroundColor: "#E3F4F4", padding: "5px 0 5px 20px" }}
            variant="h6"
          >
            Recent Deposits
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Date</StyledTableCell>
                  <StyledTableCell>Account</StyledTableCell>
                  <StyledTableCell>Description</StyledTableCell>
                  <StyledTableCell>Amount</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deposits.map((deposit) => (
                  <StyledTableRow key={deposit._id}>
                    <StyledTableCell>{deposit.date}</StyledTableCell>
                    <StyledTableCell>{deposit.account}</StyledTableCell>
                    <StyledTableCell>{deposit.description}</StyledTableCell>
                    <StyledTableCell>${deposit.amount}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Deposit;
