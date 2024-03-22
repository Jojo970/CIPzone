import Box from "../models/Box.js";
import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET

// Read

export const getAllBoxes = async (req, res) => {
    try {
        const boxes = await Box.find().populate("createdBy", "username email");
        res.status(200).json(boxes)
    } catch (err) {
        res.status(404).json({message:err.message})
    }
};

// Write
export const makeBox = async (req, res) => {
    const user = jwt.verify(req.cookies.userToken, SECRET)
    try {
        const make = await Box.create({...req.body, createdBy : user._id})
    } catch (err) {
        res.status(400).json({message:err.message})
    }
};