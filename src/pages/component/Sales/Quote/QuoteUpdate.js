import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const QuoteUpdate = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const storedQuote = useLoaderData();

  const onSubmit = (data) => {
    const quoteDetails = {
      name: data.name,
      subject: data.subject,
      amount: data.amount,
      entry: data.entry,
      expired: data.expired,
    };
    fetch(`http://localhost:5000/quote/${storedQuote._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(quoteDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Quote updated successfully!");
          navigate("/quote");
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
        Update Quote
      </Typography>
      <Button sx={{ margin: "10px 0" }} size="small" variant="contained">
        <Link to="/quote" style={{ textDecoration: "none", color: "white" }}>
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
              width: "60%",
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
              width: "60%",
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
              width: "60%",
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
              width: "60%",
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
              width: "60%",
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
    </Container>
  );
};

export default QuoteUpdate;
