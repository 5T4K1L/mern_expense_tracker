import express from "express";
import {
  readArchives,
  deleteArchives,
} from "../controllers/archivesController.js";

const router = express.Router();

// read
router.post("/read-archives", readArchives);

// delete
router.post("/delete-archives", deleteArchives);

export default router;
