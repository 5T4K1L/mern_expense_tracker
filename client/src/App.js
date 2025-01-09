import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { themeSettings } from "./theme.js";
import WelcomePage from "./scene/welcome page/WelcomePage.jsx";
import Signup from "scene/signup/Signup.jsx";
import Login from "scene/login/Login.jsx";
import Navigation from "components/Navigation.jsx";
import Dashboard from "scene/dashboard/Dashboard.jsx";
import Categories from "scene/categories/Categories.jsx";
import FoodDrink from "components/categories/FoodDrink.jsx";
import Clothing from "components/categories/Clothing.jsx";
import Electronics from "components/categories/Electronics.jsx";
import Transportation from "components/categories/Transportation.jsx";
import BankTransfer from "components/categories/BankTransfer.jsx";
import MoneyReceived from "components/categories/MoneyReceived.jsx";
import AddTransaction from "scene/transaction/AddTransaction.jsx";
import { useAuthContext } from "hooks/useAuthContext.js";
import Archives from "scene/archives/Archives.jsx";

function App() {
  const theme = useMemo(() => createTheme(themeSettings("light")), []);
  const { user } = useAuthContext();

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/add-transaction"
              element={user ? <AddTransaction /> : <Navigate to="/login" />}
            />
            <Route element={user ? <Navigation /> : <Navigate to="/login" />}>
              <Route
                path="/archives"
                element={user ? <Archives /> : <Navigate to="/archives" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="/categories"
                element={user ? <Categories /> : <Navigate to="/login" />}
              >
                <Route
                  path="/categories/food-and-drink"
                  element={user ? <FoodDrink /> : <Navigate to="/login" />}
                />
                <Route
                  path="/categories/clothing"
                  element={user ? <Clothing /> : <Navigate to="/login" />}
                />
                <Route
                  path="/categories/electronics"
                  element={user ? <Electronics /> : <Navigate to="/login" />}
                />
                <Route
                  path="/categories/transportation"
                  element={user ? <Transportation /> : <Navigate to="/login" />}
                />
                <Route
                  path="/categories/bank-transfer"
                  element={user ? <BankTransfer /> : <Navigate to="/login" />}
                />
                <Route
                  path="/categories/money-received"
                  element={user ? <MoneyReceived /> : <Navigate to="/login" />}
                />

                <Route />
              </Route>
            </Route>
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/"
              element={!user ? <WelcomePage /> : <Navigate to="/dashboard" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
