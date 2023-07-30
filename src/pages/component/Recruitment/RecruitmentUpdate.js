import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const RecruitmentUpdate = () => {
  const storedRecruitment = useLoaderData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const recruitmentDetails = {
      title: data.title,
      designation: data.designation,
      vacancy: data.vacancy,
      lastDate: data.lastDate,
      status: data.status,
    };
    fetch(
      `https://crm-server-ouus.onrender.com/recruitment/${storedRecruitment._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(recruitmentDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          reset();
          navigate("/recruitment");
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
        <AutoModeIcon sx={{ marginRight: "3px" }} />
        Recruitment Update
      </Typography>
      <Button sx={{ margin: "10px 0" }} size="small" variant="contained">
        <Link
          to="/recruitment"
          style={{ textDecoration: "none", color: "white" }}
        >
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
    </Container>
  );
};

export default RecruitmentUpdate;
