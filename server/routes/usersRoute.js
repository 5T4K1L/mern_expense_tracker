import express from "express";
import { signupUser, loginUser } from "../controllers/registeredUsers.js";

const router = express.Router();

// signup
router.post("/signup", signupUser);

// login
router.post("/login", loginUser);

export default router;
