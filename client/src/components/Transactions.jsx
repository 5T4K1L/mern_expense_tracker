import { Box, Button, Typography } from "@mui/material";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import CheckroomRoundedIcon from "@mui/icons-material/CheckroomRounded";
import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";
import React, { useEffect } from "react";
import axios from "axios";

const Transactions = ({ data, getTransaction, setTotalExpenses }) => {
  const deleteTransaction = (id) => {
    axios
      .post(`http://localhost:5000/transaction/delete-transaction?id=${id}`)
      .then((res) => {
        getTransaction();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const sortedData = [...data].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const totalAmount = sortedData.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  useEffect(() => {
    setTotalExpenses(totalAmount);
  }, [totalAmount, setTotalExpenses]);

  return (
    <Box mt="10px">
      {sortedData.map((data, index) => (
        <Box
          key={index}
          mb="20px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" alignItems="center" gap="8px">
            {data.category === "Transportation" ? (
              <Box>
                <DirectionsCarFilledRoundedIcon
                  sx={{
                    color: "#42224A",
                    fontSize: "40px",
                  }}
                />
              </Box>
            ) : data.category === "Clothing" ? (
              <Box>
                <CheckroomRoundedIcon
                  sx={{
                    color: "#42224A",
                    fontSize: "40px",
                  }}
                />
              </Box>
            ) : data.category === "Food & Drink" ? (
              <Box>
                <LocalDiningRoundedIcon
                  sx={{
                    color: "#42224A",
                    fontSize: "40px",
                  }}
                />
              </Box>
            ) : data.category === "Electronics" ? (
              <Box>
                <LaptopChromebookRoundedIcon
                  sx={{
                    color: "#42224A",
                    fontSize: "40px",
                  }}
                />
              </Box>
            ) : null}

            <Box>
              <Typography fontWeight="500" fontSize="15px">
                {data.expenseName}
              </Typography>
              <Typography fontWeight="400" fontSize="10px" color="#a4a4a4">
                {data.date}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography fontWeight="600" color="red" fontSize="15px">
              - {data.amount}
            </Typography>
            <Button onClick={() => deleteTransaction(data._id)}>
              <Typography fontWeight="400" variant="p" color="red">
                Delete
              </Typography>
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Transactions;
