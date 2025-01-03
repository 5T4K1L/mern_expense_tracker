import express from "express";
import {
  createTransaction,
  deleteAllTransaction,
  deleteTransaction,
  readTransaction,
  updateTransaction,
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

export default router;
