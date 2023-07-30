import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Payment = () => {
  const payments = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    const paymentDetails = {
      invoice: data.invoice,
      date: data.date,
      account: data.account,
      amount: data.amount,
    };

    fetch("https://crm-server-ouus.onrender.com/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("New payment added");
          reset();
          window.location.reload(false);
        }
      });
  };

  const handleDelete = () => {
    toast.error("Only admin can change");
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
          marginBottom: "10px",
        }}
        variant="h5"
      >
        <AttachMoneyIcon sx={{ marginRight: "3px" }} />
        Payment
      </Typography>
      <div style={{ marginBottom: "10px" }}>
        <Button
          sx={{
            backgroundColor: "#0097a7",
            color: "#fff",
            "&:hover": { backgroundColor: "#1C315E" },
          }}
          onClick={handleOpen}
        >
          Add Payment
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ marginBottom: "10px" }}>
                <label
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#1C315E",
                  }}
                >
                  Invoice No.
                </label>
                <br />
                <input
                  name="invoice"
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  placeholder="Enter Invoice No"
                  {...register("invoice", { required: true, maxLength: 3 })}
                />
                {errors.invoice?.type === "maxLength" && (
                  <p
                    style={{ color: "red", margin: "0", fontSize: "14px" }}
                    role="alert"
                  >
                    Max length 3
                  </p>
                )}
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
                  name="date"
                  type="date"
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  placeholder="Enter Date"
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
                  Account
                </label>
                <br />
                <input
                  type="text"
                  name="account"
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  placeholder="Enter Account Name"
                  {...register("account", { required: true })}
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
                  Amount
                </label>
                <br />
                <input
                  placeholder="$ Enter Amount"
                  name="amount"
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
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
            </form>
          </Box>
        </Modal>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#E3F4F4" }}>
            <TableRow>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Invoice No
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Account
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Transaction Id
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments
              .slice(0)
              .reverse()
              .map((payment) => (
                <TableRow
                  key={payment._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{payment.invoice}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>{payment.account}</TableCell>
                  <TableCell>${payment.amount}</TableCell>
                  <TableCell>{payment._id.slice(0, 10)}</TableCell>
                  <TableCell sx={{ display: "flex" }}>
                    <Link to={`/payment/${payment._id}`}>
                      <ModeEditIcon
                        sx={{
                          backgroundColor: "#0097a7",
                          color: "#fff",
                          padding: "4px",
                          borderRadius: "2px",
                        }}
                      />
                    </Link>
                    <DeleteIcon
                      onClick={handleDelete}
                      sx={{
                        backgroundColor: "#F24C3D",
                        color: "#fff",
                        padding: "4px",
                        borderRadius: "2px",
                        marginLeft: "5px",
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Payment;
