import { Container } from "@mui/system";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import React from "react";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";

const AddCustomer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
        <GroupAddIcon sx={{ marginRight: "3px" }} />
        Add Customer
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ fontSize: "15px", fontWeight: "bold", color: "#1C315E" }}
          >
            Name
          </label>
          <br />
          <input
            name="name"
            style={{
              width: "50%",
              padding: "5px",
              border: "1px dotted #0097a7",
              borderRadius: "5px",
            }}
            placeholder="Enter Name"
            {...register("name", { required: true, maxLength: 10 })}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ fontSize: "15px", fontWeight: "bold", color: "#1C315E" }}
          >
            Email
          </label>
          <br />
          <input
            name="email"
            style={{
              width: "50%",
              padding: "5px",
              border: "1px dotted #0097a7",
              borderRadius: "5px",
            }}
            placeholder="Enter Email"
            {...register("email", { required: true })}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ fontSize: "15px", fontWeight: "bold", color: "#1C315E" }}
          >
            Mobile
          </label>
          <br />
          <input
            name="mobile"
            type="number"
            style={{
              width: "50%",
              padding: "5px",
              border: "1px dotted #0097a7",
              borderRadius: "5px",
            }}
            placeholder="Mobile Number"
            {...register("number", { required: true, maxLength: 11 })}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ fontSize: "15px", fontWeight: "bold", color: "#1C315E" }}
          >
            Picture Upload
          </label>
          <br />
          <input
            name="image"
            type="file"
            style={{
              width: "50%",
              padding: "5px",
              border: "1px dotted #0097a7",
              borderRadius: "5px",
            }}
            {...register("image", { required: true })}
          />
        </div>
        <div style={{ marginBottom: "5px" }}>
          <label
            style={{ fontSize: "15px", fontWeight: "bold", color: "#1C315E" }}
          >
            Address
          </label>
          <br />
          <textarea
            name="address"
            style={{
              width: "50%",
              padding: "5px",
              border: "1px dotted #0097a7",
              borderRadius: "5px",
            }}
            placeholder="Enter Address"
            {...register("address", { required: true, maxLength: 11 })}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ fontSize: "15px", fontWeight: "bold", color: "#1C315E" }}
          >
            Customer Type
          </label>
          <br />
          <select
            style={{
              width: "50%",
              padding: "5px",
              border: "1px dotted #0097a7",
              borderRadius: "5px",
            }}
            {...register("gender")}
          >
            <option value="Vendor">Vendor</option>
            <option value="VIP">VIP</option>
            <option value="Regular">Regular</option>
          </select>
        </div>
        <input type="submit" />
      </form>
    </Container>
  );
};

export default AddCustomer;
