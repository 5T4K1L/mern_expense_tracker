import express from "express";
import {
  createTransaction,
  deleteAllTransaction,
  deleteTransaction,
  readTransaction,
  updateTransaction,
  deleteThirdTransaction,
  // transferExpenses,
} from "../controllers/transactionControl.js";

const router = express.Router();

// create
router.post("/create-transaction", createTransaction);

// read
router.get("/get-transaction", readTransaction);

// update
router.post("/update-transaction", updateTransaction);

// delete
router.post("/delete-transaction", deleteTransaction);

// delete all
router.post("/delete-all-transaction", deleteAllTransaction);

// delete transaction of third of the month
router.post("/delete-if-third", deleteThirdTransaction);

// transfer
// router.post("/transfer-expenses", transferExpenses);

export default router;
