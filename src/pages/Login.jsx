import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlices";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    dispatch(
      login({
        username,
        password,
      })
    );
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "4px solid black",
        borderRadius: "10px",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "300px",
        width: "100%",
      }}
    >
      <h1>Login</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          // border: "4px solid black",
          borderRadius: "10px",
          padding: "20px",
          margin: "20px",
        }}
        onSubmit={handleLogin}
      >
        <TextField
          required
          type="text"
          name="username"
          placeholder="Username"
          sx={{ border: "1px solid black", borderRadius: "10px" }}
        />
        <TextField
          required
          type="password"
          name="password"
          placeholder="Password"
          sx={{ border: "1px solid black", borderRadius: "10px" }}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
