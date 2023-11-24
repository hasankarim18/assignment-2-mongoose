"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
const userSchema = new mongoose_1.Schema({
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: {
        firstName: { type: String },
        lastName: { type: String },
    },
    age: { type: Number },
    email: { type: String, unique: true },
    hobbies: { type: [String] },
    address: {
        street: { type: String },
        city: { type: String },
        country: { type: String },
    },
    orders: { type: [orderSchema], default: undefined },
});
exports.Student = (0, mongoose_1.model)('User', userSchema);
