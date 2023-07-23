import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
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
import AutoModeIcon from "@mui/icons-material/AutoMode";

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

const Recruitment = () => {
  const recruitments = useLoaderData();
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
    const recruitmentDetails = {
      title: data.title,
      designation: data.designation,
      vacancy: data.vacancy,
      lastDate: data.lastDate,
      status: data.status,
    };

    fetch("https://crm-admin-server.vercel.app/recruitment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recruitmentDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("New recruitment added!");
          reset();
          window.location.reload(false);
        }
      });
  };

  const handleDelete = () => {
    toast.error("Only admin can delete");
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
        <AutoModeIcon sx={{ marginRight: "3px" }} />
        Recruitment
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
          Add New Job
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
                  Job Title
                </label>
                <br />
                <input
                  name="title"
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  placeholder="Enter Job Title"
                  {...register("title", { required: true, maxLength: 20 })}
                />
                {errors.title?.type === "maxLength" && (
                  <p
                    style={{ color: "red", margin: "0", fontSize: "14px" }}
                    role="alert"
                  >
                    Max length 20
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
                  {...register("designation", { required: true })}
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
                  Vacancy
                </label>
                <br />
                <input
                  name="vacancy"
                  type="number"
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  placeholder="Enter Vacancy"
                  {...register("vacancy", {
                    required: true,
                  })}
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
                  Last Date
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
                  {...register("lastDate", { required: true })}
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
                  Status
                </label>
                <br />
                <select
                  style={{
                    width: "80%",
                    padding: "5px",
                    border: "1px dotted #0097a7",
                    borderRadius: "5px",
                  }}
                  {...register("status")}
                >
                  <option value="Managed">Managed</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
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
          <TableHead sx={{ backgroundColor: "#E3F4F4" }}>
            <TableRow>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Job Title
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Designation
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Vacancy
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Last date
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Status
              </TableCell>
              <TableCell
                sx={{ color: "#1C315E", fontWeight: "700", fontSize: "15px" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recruitments
              .slice(0)
              .reverse()
              .map((recruitment) => (
                <TableRow
                  key={recruitment._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{recruitment.title}</TableCell>
                  <TableCell>{recruitment.designation}</TableCell>
                  <TableCell>{recruitment.vacancy}</TableCell>
                  <TableCell>{recruitment.lastDate}</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {recruitment.status}
                  </TableCell>
                  <TableCell>
                    <Link to={`/recruitment/${recruitment._id}`}>
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

export default Recruitment;
