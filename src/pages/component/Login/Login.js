import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { AuthContext } from "../../../context/UserContext/UserContext";
import toast from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
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
        <LoginIcon sx={{ marginRight: "3px" }} />
        Login
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
              {...register("password", { required: true })}
            />
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
          <br />
          <p style={{ display: "flex", alignItems: "center" }}>
            <button>
              <GoogleIcon />
            </button>
            <button style={{ marginLeft: "10px" }}>
              <FacebookIcon />
            </button>
          </p>
          <Typography>
            New to CRM Admin?{" "}
            <Link
              style={{ textDecoration: "none", color: "#1C315E" }}
              to="/signup"
            >
              Signup
            </Link>
          </Typography>
        </div>
      </form>
    </Container>
  );
};

export default Login;
