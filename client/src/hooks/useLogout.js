import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const nav = useNavigate();
  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });

    nav("/login");
  };

  return { logout };
};
