import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const PaymentUpdate = () => {
  const storedPayment = useLoaderData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const paymentDetails = {
      invoice: data.invoice,
      date: data.date,
      account: data.account,
      amount: data.amount,
    };
    fetch(`http://localhost:5000/payment/${storedPayment._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Payment updated successfully!");
          navigate("/payment");
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
        Update Payment
      </Typography>
      <Button sx={{ margin: "10px 0" }} size="small" variant="contained">
        <Link
          to="/payment"
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
            Invoice No.
          </label>
          <br />
          <input
            name="invoice"
            style={{
              width: "80%",
              padding: "5px",
              border: "1px dotted #0097a7",
              borderRadius: "5px",
            }}
            placeholder="Enter Invoice No"
            {...register("invoice", { required: true, maxLength: 3 })}
          />
          {errors.invoice?.type === "maxLength" && (
            <p
              style={{ color: "red", margin: "0", fontSize: "14px" }}
              role="alert"
            >
              Max length 3
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
            Date
          </label>
          <br />
          <input
            name="date"
            type="date"
            style={{
              width: "80%",
              padding: "5px",
              border: "1px dotted #0097a7",
              borderRadius: "5px",
            }}
            placeholder="Enter Date"
            {...register("date", { required: true })}
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
            Account
          </label>
          <br />
          <input
            type="text"
            name="account"
            style={{
              width: "80%",
              padding: "5px",
              border: "1px dotted #0097a7",
              borderRadius: "5px",
            }}
            placeholder="Enter Account Name"
            {...register("account", { required: true })}
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
            Amount
          </label>
          <br />
          <input
            placeholder="$ Enter Amount"
            name="amount"
            style={{
              width: "80%",
              padding: "5px",
              border: "1px dotted #0097a7",
              borderRadius: "5px",
            }}
            {...register("amount", { required: true })}
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

export default PaymentUpdate;
