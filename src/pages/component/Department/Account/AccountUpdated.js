import { Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import toast from "react-hot-toast";

const AccountUpdated = () => {
  const storedAccount = useLoaderData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const accountDetails = {
      name: data.name,
      designation: data.designation,
    };

    fetch(`https://crm-server-ouus.onrender.com/account/${storedAccount._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(accountDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Account updated successfully!");
          navigate("/account");
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
        <RoomPreferencesIcon sx={{ marginRight: "3px" }} />
        Update Account
      </Typography>
      <Button sx={{ margin: "10px 0" }} size="small" variant="contained">
        <Link to="/account" style={{ textDecoration: "none", color: "white" }}>
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
    </Container>
  );
};

export default AccountUpdated;
