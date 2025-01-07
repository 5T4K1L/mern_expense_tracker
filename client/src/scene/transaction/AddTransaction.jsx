import React, { useEffect, useState } from "react";
import {
  Box,
  Input,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Button,
} from "@mui/material";
import useAddTransaction from "hooks/useAddTransaction";
import useTransactions from "hooks/useTransaction";

const AddTransaction = () => {
  const [category, setCategory] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [thirdOfMonth, setThirdOfMonth] = useState("");

  const { getTransaction } = useTransactions();
  const { handleAddTransaction, handleAddAnother } = useAddTransaction(
    getTransaction,
    () => {
      setExpenseName("");
      setAmount("");
      setCategory("");
    },
    thirdOfMonth
  );

  useEffect(() => {
    const date = new Date();
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 3);
    const options = { year: "numeric", month: "long", day: "numeric" };
    setThirdOfMonth(nextMonth.toLocaleDateString("en-US", options));
  }, []);

  const handleSubmit = (type) => (e) => {
    e.preventDefault();

    const transactionData = {
      expenseName,
      amount,
      category,
      thirdOfMonth,
    };

    if (type === "add") {
      handleAddTransaction(transactionData);
    } else if (type === "addAnother") {
      handleAddAnother(transactionData);
    }
  };

  return (
    <Box m="37px 22px">
      <Typography fontWeight="400" variant="h2">
        Add{" "}
        <span style={{ color: "#42224A", fontWeight: "bold" }}>Expense</span>
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
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
              sx={{ fontSize: "20px", marginTop: "10px" }}
            >
              <MenuItem value="Clothing">Clothing</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Transportation">Transportation</MenuItem>
              <MenuItem value="Food & Drink">Food & Drink</MenuItem>
            </Select>
          </FormControl>
          <Typography
            sx={{ color: "red", marginTop: "30px", marginBottom: "-20px" }}
          >
            The expenses last month will be deleted every third of the upcoming
            month.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Button
            onClick={handleSubmit("add")}
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
            onClick={handleSubmit("addAnother")}
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
