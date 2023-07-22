import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext } from "react";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/UserContext/UserContext";
import toast from "react-hot-toast";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    const name = data.name;

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage)
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
        <SensorOccupiedIcon sx={{ marginRight: "3px" }} />
        Signup
      </Typography>
      <form
        style={{ border: "1px solid black", borderRadius: "5px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div style={{ padding: "10px" }}>
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
              type="text"
              name="name"
              style={{
                width: "50%",
                padding: "5px",
                border: "1px dotted #0097a7",
                borderRadius: "5px",
              }}
              placeholder="Your Name"
              {...register("name", { required: true })}
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
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              style={{
                width: "50%",
                padding: "5px",
                border: "1px dotted #0097a7",
                borderRadius: "5px",
              }}
              placeholder="Your Email"
              {...register("email", { required: true })}
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
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              style={{
                width: "50%",
                padding: "5px",
                border: "1px dotted #0097a7",
                borderRadius: "5px",
              }}
              placeholder="Your Password"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password?.type === "minLength" && (
              <p
                style={{ color: "red", margin: "0", fontSize: "12px" }}
                role="alert"
              >
                Min length 8
              </p>
            )}
          </div>
          <input
            style={{
              cursor: "pointer",
              marginRight: "20px",
              background: "#0097a7",
              border: "none",
              color: "white",
              padding: "5px 20px",
              fontSize: "16px",
            }}
            type="submit"
          />
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
          <Typography sx={{ marginTop: "8px" }}>
            Already have an account?{" "}
            <Link
              style={{ textDecoration: "none", color: "#1C315E" }}
              to="/signin"
            >
              Signin
            </Link>
          </Typography>
        </div>
      </form>
    </Container>
  );
};

export default Signup;
