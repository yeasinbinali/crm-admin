import { Container } from "@mui/system";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import React from "react";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";

const AddCustomer = () => {
  const { register, handleSubmit } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);

  const onSubmit = (data) => {
    console.log(data);
  }
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
            name="number"
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
        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ fontSize: "15px", fontWeight: "bold", color: "#1C315E" }}
          >
            Sex
          </label>
          <br />
          <input
            type="radio"
            name="male"
            {...register("sex", { required: true })}
          />
          <lable>Male</lable>
          <input
            type="radio"
            name="female"
            style={{ marginLeft: "30px" }}
            {...register("sex", { required: true })}
          />
          <lable>Female</lable>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ fontSize: "15px", fontWeight: "bold", color: "#1C315E" }}
          >
            Status
          </label>
          <br />
          <input
            type="radio"
            name="active"
            {...register("status", { required: true })}
          />
          <lable>Active</lable>
          <input
            type="radio"
            name="inactive"
            style={{ marginLeft: "30px" }}
            {...register("status", { required: true })}
          />
          <lable>Inactive</lable>
        </div>
        <div>
          <input
            style={{
              marginRight: "20px",
              background: "#1C315E ",
              border: "none",
              color: "white",
              padding: "5px 20px",
              fontSize: "16px",
            }}
            type="reset"
          />
          <input
            style={{
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

export default AddCustomer;
