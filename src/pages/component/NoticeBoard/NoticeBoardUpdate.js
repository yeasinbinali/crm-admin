import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import toast from "react-hot-toast";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NoticeBoardUpdate = () => {
  const storedNotice = useLoaderData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const noticeDetails = {
      title: data.title,
      publishedDate: data.publishedDate,
      description: data.description,
      publishedBy: data.publishedBy,
    };
    fetch(`https://crm-admin-server.vercel.app/notice/${storedNotice._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(noticeDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Notice updated successfully!");
          navigate("/notice");
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
        <AddToPhotosIcon sx={{ marginRight: "3px" }} />
        Update Notice
      </Typography>
      <Button sx={{ margin: "10px 0" }} size="small" variant="contained">
        <Link to="/notice" style={{ textDecoration: "none", color: "white" }}>
          Back
        </Link>
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "10px" }}>
          <label
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#1C315E",
            }}
          >
            Notice Title
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
            placeholder="Enter Notice Title"
            {...register("title", { required: true, maxLength: 10 })}
          />
          {errors.notice?.type === "maxLength" && (
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
            Published Date
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
            {...register("publishedDate", { required: true })}
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
              width: "80%",
              padding: "5px",
              border: "1px dotted #0097a7",
              borderRadius: "5px",
            }}
            placeholder="Enter Description"
            {...register("description", { required: true })}
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
            Published By
          </label>
          <br />
          <input
            name="publishedBy"
            style={{
              width: "80%",
              padding: "5px",
              border: "1px dotted #0097a7",
              borderRadius: "5px",
            }}
            placeholder="Enter Published By"
            {...register("publishedBy", {
              required: true,
              maxLength: 10,
            })}
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
    </Container>
  );
};

export default NoticeBoardUpdate;
