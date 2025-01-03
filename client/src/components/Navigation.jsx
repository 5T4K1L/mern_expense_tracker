import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavigationMenu from "./NavigationMenu";
import { Outlet } from "react-router-dom";
import Greetings from "./Greetings";

const Navigation = () => {
  return (
    <Box height="100vh" m="37px 22px">
      <Greetings />
      <Outlet />
      <NavigationMenu />
    </Box>
  );
};

export default Navigation;
