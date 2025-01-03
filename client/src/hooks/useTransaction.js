import axios from "axios";
import { useState, useCallback } from "react";

const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const getTransaction = useCallback(() => {
    if (user) {
      axios
        .get(
          `http://localhost:5000/transaction/get-transaction?email=${user.email}`
        )
        .then((response) => {
          setTransactions(response.data);
        })
        .catch((error) => console.error("Error: ", error));
    } else {
      console.log("User not found in local storage");
    }
  }, [user]);

  const deleteAllTransaction = () => {
    if (user) {
      axios
        .post(
          `http://localhost:5000/transaction/delete-all-transaction?email=${user.email}`
        )
        .then((res) => {
          getTransaction();
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return { transactions, getTransaction, deleteAllTransaction };
};

export default useTransactions;
