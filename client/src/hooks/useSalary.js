import { useState } from "react";
import axios from "axios";

const useSalary = () => {
  const [salary, setSalary] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  const getSalary = async () => {
    if (user) {
      try {
        const response = await axios.get(
          `https://mern-expense-tracker-cqy0.onrender.com/salary/get-salary?email=${user.email}`
          // `http://localhost:5000/salary/get-salary?email=${user.email}`
        );
        setSalary(response.data.salary);
      } catch (error) {
        console.error("Error fetching salary:", error);
      }
    }
  };

  return { salary, getSalary };
};

export default useSalary;
