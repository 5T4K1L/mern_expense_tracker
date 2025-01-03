import React from "react";
import { Box, Button, Typography } from "@mui/material";
import cards from "../../assets/images/homepagecard.png";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap="43px"
      sx={{ margin: 0 }}
    >
      <Box>
        <img src={cards} alt="Card Icon" style={{ height: "290px" }} />
      </Box>
      <Box>
        <Typography variant="h3" align="center">
          Welcome to <span style={{ color: "#8B5997" }}>FinTrack</span>
        </Typography>
        <Typography variant="h4" m="21px 30px 0" align="center">
          Your Ultimate Companion for Effortless Expense Management, Smart
          Saving, and Achieving Financial Freedom.
        </Typography>
      </Box>
      <Box>
        <Link to="/signup">
          <Button
            sx={{
              backgroundColor: "#42224a",
              fontSize: "15px",
              color: "White",
              border: "none",
              fontWeight: "500",
              padding: "12px 42px",
              borderRadius: "20px",
              fontWeight: "400",
              "&:hover": {
                backgroundColor: "#5f3c6b",
              },
            }}
          >
            Get Started
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default WelcomePage;
