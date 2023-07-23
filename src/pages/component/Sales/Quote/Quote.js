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
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

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

const Quote = () => {
  const quotes = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDeleteBtn = () => {
    toast.error(`Only admin can delete`);
  };

  const onSubmit = (data) => {
    const quoteDetails = {
      name: data.name,
      subject: data.subject,
      amount: data.amount,
      entry: data.entry,
      expired: data.expired,
    };
    fetch("https://crm-admin-server.vercel.app/quote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(quoteDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("New quote added!");
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
        Quote
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
          Add Quote
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
                  Subject
                </label>
                <br />
                <select
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  {...register("subject")}
                >
                  <option value="Technology">Technology</option>
                  <option value="Business">Business</option>
                  <option value="Networking">Networking</option>
                  <option value="Marketing">Marketing</option>
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
                  Entry Date
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
                  {...register("entry", { required: true })}
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
                  Expired Date
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
                  {...register("expired", { required: true })}
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
                Account
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Subject
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Entry Date
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Expired Date
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quotes
              .slice(0)
              .reverse()
              .map((quote) => (
                <TableRow
                  key={quote._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{quote.name}</TableCell>
                  <TableCell>{quote.subject}</TableCell>
                  <TableCell>${quote.amount}</TableCell>
                  <TableCell>{quote.entry}</TableCell>
                  <TableCell>{quote.expired}</TableCell>
                  <TableCell>
                    <Link to={`/quote/${quote._id}`}>
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
                      onClick={handleDeleteBtn}
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

export default Quote;
