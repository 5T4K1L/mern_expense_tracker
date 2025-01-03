import { Box, Button, Typography } from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "hooks/useLogout";

const NavigationMenu = () => {
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderTop: "1px solid #D3D3D3",
        display: "flex",
        justifyContent: "center",
        gap: "100px",
        alignItems: "center",
        padding: "10px 40px",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      <Link to="/dashboard" style={{ color: "#42224A" }}>
        <DashboardRoundedIcon
          sx={{
            fontSize: "30px",
          }}
        />
      </Link>
      {/* <Link to="/categories" style={{ color: "#42224A" }}>
        <CategoryRoundedIcon
          sx={{
            fontSize: "30px",
          }}
        />
      </Link> */}
      {/* <Link style={{ color: "#42224A" }}>
        <QueryStatsRoundedIcon
          sx={{
            fontSize: "30px",
          }}
        />
      </Link> */}
      {/* <Link style={{ color: "#42224A" }}>
        <AccountCircleRoundedIcon
          sx={{
            fontSize: "30px",
          }}
        />
      </Link> */}
      <Link onClick={handleLogout}>
        <LogoutIcon
          style={{ color: "#42224A" }}
          sx={{
            fontSize: "30px",
          }}
        />
      </Link>
    </Box>
  );
};

export default NavigationMenu;
