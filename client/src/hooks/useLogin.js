import { useNavigate } from "react-router-dom";

const { useState } = require("react");
const { useAuthContext } = require("./useAuthContext");

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const nav = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    // const response = await fetch("http://localhost:5000/user/login", {
    const response = await fetch(
      "https://mern-expense-tracker-cqy0.onrender.com/user/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);

      nav("/dashboard");
    }
  };

  return { login, isLoading, error };
};
