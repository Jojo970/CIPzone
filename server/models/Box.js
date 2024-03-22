import mongoose from "mongoose";

const BoxSchema = new mongoose.Schema(
    {
        productNumber: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        productName:{
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        boxColor: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User",
        }
    }, {timestamps: true}
);

const Box = mongoose.model("Box", BoxSchema);

export default Box