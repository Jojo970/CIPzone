import express from "express";
import {
    getUser,
} from "../controllers/users.js";
import { getAllBoxes, makeBox } from "../controllers/box.js";
import { verifyToken } from "../middleware/auth.js"

const router = express.Router();

// get user

router.get("/:id", verifyToken, getUser);

// routes for boxes
router.get("/api", verifyToken, getAllBoxes);
router.post("/api", verifyToken, makeBox);


export default router