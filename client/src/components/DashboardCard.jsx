import { Box, Typography } from "@mui/material";
import React from "react";

const DashboardCard = ({ salary, totalExpenses, totalBalance }) => {
  return (
    <Box>
      <Box
        sx={{
          background: "linear-gradient(to right, #42224A, #9D51B0)",
          borderRadius: "30px",
          padding: "26px 24px",
          color: "white",
        }}
      >
        <Box mb="28px">
          <Typography fontWeight="300" fontSize="15px">
            My Budget
          </Typography>
          <Typography fontSize="20px">
            ₱ <span style={{ fontSize: "30px" }}>{salary}</span>
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography fontWeight="300" fontSize="15px">
              Expenses
            </Typography>
            <Typography fontSize="20px">
              ₱ <span style={{ fontSize: "30px" }}>{totalExpenses}</span>
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight="300" fontSize="15px">
              Total Balance
            </Typography>
            <Typography fontSize="20px">
              ₱ <span style={{ fontSize: "30px" }}>{totalBalance}</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardCard;
