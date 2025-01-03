import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import add from "assets/images/addsign.png";
import { dateReducer } from "reducer/DateNow";

const Greetings = () => {
  const [state, dispatch] = useReducer(dateReducer, "");

  useEffect(() => {
    const currentHour = new Date().getHours();
    dispatch({ type: "UPDATE_TIME", payload: currentHour });
  }, []);

  return (
    <Box
      mb="30px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h2" fontWeight="400">
        Good {state}
      </Typography>
      <Link to="/add-transaction">
        <Button>
          <img
            style={{ height: "30px", opacity: "77%" }}
            src={add}
            alt="Add Button"
          />
        </Button>
      </Link>
    </Box>
  );
};

export default Greetings;
