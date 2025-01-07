import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAddTransaction = (getTransaction, resetForm, thirdOfMonth) => {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const formatDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  };

  const handleAddTransaction = (transactionData) => {
    const currentDate = formatDate();
    axios
      .post(
        "https://mern-expense-tracker-cqy0.onrender.com/transaction/create-transaction",
        {
          ...transactionData,
          email: user?.email,
          date: currentDate,
          thirdOfMonth,
        }
      )
      .then(() => {
        nav("/dashboard");
      })
      .catch((err) => console.error(err));
  };

  const handleAddAnother = (transactionData) => {
    const currentDate = formatDate();
    axios
      .post(
        "https://mern-expense-tracker-cqy0.onrender.com/transaction/create-transaction",
        {
          ...transactionData,
          email: user?.email,
          date: currentDate,
          thirdOfMonth,
        }
      )
      .then(() => {
        if (getTransaction) getTransaction();
        if (resetForm) resetForm();
      })
      .catch((err) => console.error(err));
  };

  return { handleAddTransaction, handleAddAnother };
};

export default useAddTransaction;
