import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const DashboardCard = ({ salary, totalExpenses, totalBalance, data }) => {
  const [textToCopy, setTextToCopy] = useState();

  useEffect(() => {
    if (Array.isArray(data)) {
      const text = data
        .map((item) => `${item.amount} on ${item.expenseName}\n`)
        .join(""); // Join all strings into one
      setTextToCopy(`For this month, I spent:\n${text}`);
    }
  }, [data]);

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
        <Box mb="28px" display="flex" justifyContent="space-between">
          <Box>
            <Typography fontWeight="300" fontSize="15px">
              My Budget
            </Typography>
            <Typography fontSize="20px">
              ₱ <span style={{ fontSize: "30px" }}>{salary}</span>
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap="5px">
            <Typography fontWeight="300" fontSize="15px">
              Expenses this month
            </Typography>
            <CopyToClipboard text={textToCopy}>
              <button
                style={{
                  fontFamily: "Raleway",
                  width: "130px",
                  borderRadius: "10px",
                  border: "none",
                  background: "#42224A",
                  color: "white",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                Copy
              </button>
            </CopyToClipboard>
          </Box>
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
