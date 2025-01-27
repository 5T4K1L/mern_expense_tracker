import express from "express";
import { decrypt, encrypt } from "../controllers/encryptionController.js";

const router = express.Router();

router.post("/encrypt", encrypt);
router.post("/decrypt", decrypt);

export default router;
