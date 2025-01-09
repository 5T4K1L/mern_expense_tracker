import axios from "axios";
import { useCallback, useState } from "react";

const useArchives = () => {
  const [archive, setArchive] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const getArchives = useCallback(() => {
    if (user) {
      axios
        .post(
          //   `http://localhost:5000/archives/read-archives?email=${user.email}`
          `https://mern-expense-tracker-cqy0.onrender.com/archives/read-archives?email=${user.email}`
        )
        .then((response) => {
          setArchive(response.data);
        })
        .catch((error) => console.error("Error: ", error));
    } else {
      console.log("User not found in local storage");
    }
  }, [user]);

  const deleteArchives = () => {
    if (user) {
      axios
        .post(
          //   `http://localhost:5000/archives/delete-archives?email=${user.email}`
          `https://mern-expense-tracker-cqy0.onrender.com/archives/delete-archives?email=${user.email}`
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("No user found in local storage");
    }
  };

  return { archive, getArchives, deleteArchives };
};

export default useArchives;
