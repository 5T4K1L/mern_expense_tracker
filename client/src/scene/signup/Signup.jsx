import { Box, Button, Input, Typography } from "@mui/material";
import axios from "axios";
import { useSignup } from "hooks/useSignup";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [salary, setSalary] = useState("");
  const { signup, error } = useSignup();

  const handleSignup = async (e, res) => {
    e.preventDefault();

    await signup(username, email, password, salary);
  };

  return (
    <Box
      position="relative"
      left="50%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="100vh"
      width="250px"
      gap="43px"
      sx={{ margin: 0, transform: "translate(-50%, 0)" }}
    >
      <Typography variant="h2">Register</Typography>
      <Box display="flex" flexDirection="column" gap="40px">
        <Input
          disableUnderline
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            backgroundColor: "#EFE9F1",
            color: "black",
            padding: "10px 22px",
            borderRadius: "20px",
            fontSize: "15px",
          }}
          placeholder="Username"
        />
        <Input
          disableUnderline
          onChange={(e) => setEmail(e.target.value)}
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
        <Input
          disableUnderline
          onChange={(e) => setSalary(e.target.value)}
          sx={{
            backgroundColor: "#EFE9F1",
            color: "black",
            padding: "10px 22px",
            borderRadius: "20px",
            fontSize: "15px",
          }}
          placeholder="Set Initial Budget"
          type="number"
        />
        {error && (
          <Typography m="-25px 0" color="red" fontWeight="400">
            {error}
          </Typography>
        )}
        <Button
          onClick={handleSignup}
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
          Register
        </Button>
        <Typography color="#868686">
          Already have an account?{" "}
          <Link
            style={{ color: "#8196ff", textDecoration: "none" }}
            to="/login"
          >
            Login.
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
