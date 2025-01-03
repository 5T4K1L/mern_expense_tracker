import { Box, Button, Typography } from "@mui/material";
import CategoryButton from "components/CategoryButton";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <Box display="flex" flexDirection="column" gap="24px">
      <Box display="flex" justifyContent="center" gap="23px">
        <Link
          style={{ textDecoration: "none" }}
          to="/categories/food-and-drink"
        >
          <CategoryButton>Food & Drink</CategoryButton>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/categories/clothing">
          <CategoryButton>Clothing</CategoryButton>
        </Link>
      </Box>
      <Box display="flex" justifyContent="center" gap="23px">
        <Link style={{ textDecoration: "none" }} to="/categories/electronics">
          <CategoryButton>Electronics</CategoryButton>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to="/categories/transportation"
        >
          <CategoryButton>Transportation</CategoryButton>
        </Link>
      </Box>
      <Box display="flex" justifyContent="center" gap="23px">
        <Link style={{ textDecoration: "none" }} to="/categories/bank-transfer">
          <CategoryButton>Bank Transfer</CategoryButton>
        </Link>
      </Box>

      <Outlet />
    </Box>
  );
};

export default Categories;
