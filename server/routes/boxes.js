import express from "express";
import { getAllBoxes, makeBox } from "../controllers/box.js";

const router = express.Router();

// routes for boxes
router.get("/:userId/api", getAllBoxes);
router.post("/api", makeBox);


export default router