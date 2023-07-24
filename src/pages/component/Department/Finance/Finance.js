import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
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
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
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

const Finance = () => {
  const [finances, setFinances] = useState([]);
  useEffect(() => {
    fetch("https://crm-admin-server.vercel.app/finance")
      .then((res) => res.json())
      .then((data) => setFinances(data));
  }, []);
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
    const financeDetails = {
      name: data.name,
      designation: data.designation,
    };
    fetch("https://crm-admin-server.vercel.app/finance", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(financeDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("New finance person added");
          reset();
          window.location.reload(false);
        }
      });
  };

  const handleDelete = () => {
    toast.error("Only Admin can delete!");
  };

  return (
    <div style={{ background: "whitesmoke", padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{ color: "#1C315E", fontWeight: "bold", marginBottom: "10px" }}
          variant="h6"
        >
          Finance
        </Typography>
        <div>
          <div>
            <Button
              size="small"
              sx={{
                backgroundColor: "#0097a7",
                color: "#fff",
                "&:hover": { backgroundColor: "#1C315E" },
              }}
              onClick={handleOpen}
            >
              Add Finance Person
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
                      {...register("name", {
                        required: true,
                        maxLength: 10,
                      })}
                    />
                    {errors.name?.type === "maxLength" && (
                      <p
                        style={{ color: "red", margin: "0", fontSize: "14px" }}
                        role="alert"
                      >
                        Max length 10
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
                      Designation
                    </label>
                    <br />
                    <input
                      name="designation"
                      style={{
                        width: "80%",
                        padding: "5px",
                        border: "1px dotted #0097a7",
                        borderRadius: "5px",
                      }}
                      placeholder="Enter Designation"
                      {...register("designation", {
                        required: true,
                        maxLength: 20,
                      })}
                    />
                    {errors.designation?.type === "maxLength" && (
                      <p
                        style={{ color: "red", margin: "0", fontSize: "14px" }}
                        role="alert"
                      >
                        Max length 20
                      </p>
                    )}
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
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow sx={{ background: "#E3F4F4" }}>
              <TableCell
                sx={{
                  color: "#1C315E",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  color: "#1C315E",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                Designation
              </TableCell>
              <TableCell
                sx={{
                  color: "#1C315E",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finances
              .slice(0)
              .reverse()
              .map((finance) => (
                <TableRow key={finance._id}>
                  <TableCell>{finance.name}</TableCell>
                  <TableCell>{finance.designation}</TableCell>
                  <TableCell sx={{display: 'flex'}}>
                    <Link to={`/finance/${finance._id}`}>
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
    </div>
  );
};

export default Finance;
