import express from "express";
import { getMonth, getTotal } from "../controllers/chartController.js";

const router = express.Router();

// read month
router.get("/get-months-to-chart", getMonth);

// read total of month
router.get("/get-total-of-month", getTotal);

export default router;
