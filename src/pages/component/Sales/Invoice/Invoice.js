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
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Invoice = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const invoices = useLoaderData();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    const invoiceDetails = {
      name: data.name,
      amount: data.amount,
      invoice: data.invoice,
      due: data.due,
      type: data.type,
    };
    fetch("http://localhost:5000/invoice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(invoiceDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("New invoice added!");
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
          marginBottom: "10px",
        }}
        variant="h5"
      >
        <AttachMoneyIcon sx={{ marginRight: "3px" }} />
        Invoice
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
          Add Invoice
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
                  Name
                </label>
                <br />
                <input
                  name="name"
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  placeholder="Enter Name"
                  {...register("name", { required: true, maxLength: 8 })}
                />
                {errors.name?.type === "maxLength" && (
                  <p
                    style={{ color: "red", margin: "0", fontSize: "14px" }}
                    role="alert"
                  >
                    Max length 8
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
                  Amount
                </label>
                <br />
                <input
                  name="amount"
                  type="number"
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  placeholder="$Enter amount"
                  {...register("amount", { required: true })}
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
                  Invoice Date
                </label>
                <br />
                <input
                  type="date"
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  {...register("invoice", { required: true })}
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
                  Due Date
                </label>
                <br />
                <input
                  type="date"
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  {...register("due", { required: true })}
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
                  Invoice Type
                </label>
                <br />
                <select
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  {...register("type")}
                >
                  <option value="Overdue">Overdue</option>
                  <option value="Sales">Sales</option>
                  <option value="Retainer">Retainer</option>
                  <option value="Interim">Interim</option>
                </select>
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
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Invoice Date</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                key={invoice._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{invoice.name}</TableCell>
                <TableCell>${invoice.amount}</TableCell>
                <TableCell>{invoice.invoice}</TableCell>
                <TableCell>{invoice.due}</TableCell>
                <TableCell>{invoice.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Invoice;
