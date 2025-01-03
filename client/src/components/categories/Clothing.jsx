import { Box, Button, Typography } from "@mui/material";
import Transactions from "components/Transactions";
import React from "react";

const Clothing = () => {
  return (
    <Box>
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize="15px" color="#888888">
            Transactions
          </Typography>
          <Button
            sx={{
              color: "#FF9090",
              fontSize: "12px",
            }}
          >
            Clear Transactions
          </Button>
        </Box>
        <Transactions />
      </Box>
    </Box>
  );
};

export default Clothing;
