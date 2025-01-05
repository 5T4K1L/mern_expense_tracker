import axios from "axios";
import { useNavigate } from "react-router-dom";

const { useState } = require("react");
const { useAuthContext } = require("./useAuthContext");

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const nav = useNavigate();

  const signup = async (username, email, password, salary) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://mern-expense-tracker-cqy0.onrender.com/user/signup",
      {
        // const response = await fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // axios.post(`http://localhost:5000/salary/set-salary`, {
      axios.post(
        `https://mern-expense-tracker-cqy0.onrender.com/salary/set-salary`,
        {
          salary,
          email,
        }
      );

      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      nav("/login");
    }
  };

  return { signup, isLoading, error };
};
