import express from "express";
import { setSalary, getSalary } from "../controllers/salaryController.js";

const router = express.Router();

// set the user's salary/budget
router.post("/set-salary", setSalary);

// get budget
router.get("/get-salary", getSalary);

export default router;
