import { Box, Button, Typography } from "@mui/material";
import DashboardCard from "components/DashboardCard";
import Transactions from "components/Transactions";
import useSalary from "hooks/useSalary";
import useTransactions from "hooks/useTransaction";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const { transactions, getTransaction, deleteAllTransaction, deleteThird } =
    useTransactions();
  const { salary, getSalary } = useSalary();
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    if (salary !== null && totalExpenses !== null) {
      setTotalBalance(Number(salary) - totalExpenses);
    }
  }, [salary, totalExpenses]);

  useEffect(() => {
    getSalary();
    getTransaction();
  }, []);

  useEffect(() => {
    deleteThird();
  }, [transactions]);

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", paddingBottom: "50px" }}>
      {" "}
      <DashboardCard
        totalBalance={totalBalance}
        salary={salary}
        totalExpenses={totalExpenses}
        data={transactions}
      />
      <Box mt="30px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize="15px" color="#888888">
            Transactions
          </Typography>
          <Button
            onClick={deleteAllTransaction}
            sx={{
              color: "#FF9090",
              fontSize: "12px",
            }}
          >
            Clear Transactions
          </Button>
        </Box>
        <Transactions
          data={transactions}
          getTransaction={getTransaction}
          setTotalExpenses={setTotalExpenses}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
