import { Box, Button, Input, Typography } from "@mui/material";
import { useLogin } from "hooks/useLogin";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <Box
      position="relative"
      left="50%"
      display="flex"
      flexDirection="column"
      s
      justifyContent="center"
      height="100vh"
      width="250px"
      gap="43px"
      sx={{ margin: 0, transform: "translate(-50%, 0)" }}
    >
      <Typography variant="h2">Login</Typography>
      <Box display="flex" flexDirection="column" gap="40px">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          disableUnderline
          sx={{
            backgroundColor: "#EFE9F1",
            color: "black",
            padding: "10px 22px",
            borderRadius: "20px",
            fontSize: "15px",
          }}
          placeholder="Email"
        />
        <Input
          disableUnderline
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            backgroundColor: "#EFE9F1",
            color: "black",
            padding: "10px 22px",
            borderRadius: "20px",
            fontSize: "15px",
          }}
          placeholder="Password"
          type="password"
        />
        {error && (
          <Typography m="-25px 0" color="red" fontWeight="400">
            {error}
          </Typography>
        )}
        <Button
          onClick={handleLogin}
          sx={{
            boxShadow: "none",
            backgroundColor: "#42224a",
            color: "white",
            width: "190px",
            padding: "12px 5px",
            fontSize: "15px",
            fontWeight: "300",
            borderRadius: "20px",
          }}
          variant="contained"
        >
          Login
        </Button>
        <Typography color="#868686">
          Don't have an account?{" "}
          <Link
            style={{ color: "#8196ff", textDecoration: "none" }}
            to="/signup"
          >
            Register.
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
