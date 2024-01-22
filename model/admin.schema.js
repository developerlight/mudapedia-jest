import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    joined: {
        type: Date,
        default: Date.now,
    }
});

const Admin = mongoose.model("admin", adminSchema, "admin");

export default Admin;