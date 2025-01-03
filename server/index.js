import mongoose from "mongoose";
import usersRoute from "./routes/usersRoute.js";
import transactionRoute from "./routes/transactionRoute.js";
import userSalary from "./routes/userSalary.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// CONFIGURATION

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

// ROUTES

app.use("/user", usersRoute);
app.use("/transaction", transactionRoute);
app.use("/salary", userSalary);

// MONGOOSE SETUP

const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log("Server running on port ", PORT));
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
