import React, { useState } from "react";
import {
  Box,
  Input,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Button,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useTransactions from "hooks/useTransaction";

const formatDate = () => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date().toLocaleDateString("en-US", options);
};

const AddTransaction = () => {
  const [category, setCategory] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const { transactions, getTransaction } = useTransactions();
  const nav = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();

    // format date
    const currentDate = formatDate();

    axios
      .post("http://localhost:5000/transaction/create-transaction", {
        expenseName,
        email: user?.email,
        amount,
        category,
        date: currentDate,
      })
      .then(nav("/dashboard"))
      .catch((err) => console.log("error"));
  };

  const handleAddAnother = (e) => {
    e.preventDefault();

    const currentDate = formatDate();
    axios
      .post("http://localhost:5000/transaction/create-transaction", {
        expenseName,
        email: user?.email,
        amount,
        category,
        date: currentDate,
      })
      .then(() => {
        getTransaction();
        setExpenseName("");
        setAmount("");
        setCategory("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box m="37px 22px">
      <Typography fontWeight="400" variant="h2">
        Add{" "}
        <span style={{ color: "#42224A", fontWeight: "bold" }}>
          Transaction
        </span>
      </Typography>
      <Box mt="64px">
        <Box mb="49px">
          <Typography fontSize="20px" color="#9d9d9d">
            Expense Name
          </Typography>
          <Input
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            sx={{
              width: "100%",
              fontSize: "20px",
              marginTop: "10px",
            }}
          />
        </Box>
        <Box mb="49px">
          <Typography fontSize="20px" color="#9d9d9d">
            Amount
          </Typography>
          <Box display="flex" gap="10px" alignItems="flex-end">
            <Typography fontSize="20px" color="#595959">
              ₱
            </Typography>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              sx={{
                width: "100%",
                fontSize: "20px",
                marginTop: "10px",
              }}
            />
          </Box>
        </Box>
        <Box mb="49px">
          <Typography sx={{ mb: "10px" }} fontSize="20px" color="#9d9d9d">
            Category
          </Typography>
          <FormControl fullWidth>
            <Select
              value={category}
              onChange={handleCategoryChange}
              label="Category"
              sx={{ fontSize: "20px", marginTop: "10px" }}
            >
              <MenuItem value="Clothing">Clothing</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Transportation">Transportation</MenuItem>
              <MenuItem value="Food & Drink">Food & Drink</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Button
            onClick={handleAddTransaction}
            sx={{
              backgroundColor: "#42224a",
              width: "156px",
              height: "49px",
              textAlign: "center",
              fontSize: "15px",
              borderRadius: "20px",
              fontWeight: "300",
            }}
          >
            Add
          </Button>
          <Button
            onClick={handleAddAnother}
            sx={{
              backgroundColor: "#42224a",
              width: "156px",
              height: "49px",
              textAlign: "center",
              fontSize: "15px",
              borderRadius: "20px",
              fontWeight: "300",
            }}
          >
            Add Another
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddTransaction;
