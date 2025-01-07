import axios from "axios";
import { useState, useCallback, useEffect } from "react";

const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const getTransaction = useCallback(() => {
    if (user) {
      axios
        .get(
          `https://mern-expense-tracker-cqy0.onrender.com/transaction/get-transaction?email=${user.email}`
          // `http://localhost:5000/transaction/get-transaction?email=${user.email}`
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
          `https://mern-expense-tracker-cqy0.onrender.com/transaction/delete-all-transaction?email=${user.email}`
          // `http://localhost:5000/transaction/delete-all-transaction?email=${user.email}`
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

  const deleteThird = () => {
    const formatDate = () => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date().toLocaleDateString("en-US", options);
    };

    const currentDate = formatDate();

    transactions.forEach((transaction) => {
      if (currentDate === transaction.thirdOfMonth) {
        console.log(transactions.length);
        axios
          .post(
            `https://mern-expense-tracker-cqy0.onrender.com/transaction/delete-if-third?email=${user.email}&thirdOfMonth=${transaction.thirdOfMonth}&expenseName=${transaction.expenseName}&date=${transaction.date}&category=${transaction.category}&amount=${transaction.amount}`
            // `http://localhost:5000/transaction/delete-if-third?email=${user.email}&thirdOfMonth=${transaction.thirdOfMonth}&expenseName=${transaction.expenseName}&date=${transaction.date}&category=${transaction.category}&amount=${transaction.amount}`
          )
          .then((res) => {
            getTransaction();
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return { transactions, getTransaction, deleteAllTransaction, deleteThird };
};

export default useTransactions;
