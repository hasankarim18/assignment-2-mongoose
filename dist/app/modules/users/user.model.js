"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
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
    isDeleted: { type: Boolean },
});
/** schema pre  */
// hassing the password when saved
userSchema.pre('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const user = this;
        user.password = yield bcrypt_1.default.hash(user.password, Number(config_1.default.bycrpt_salt_rounds));
        user.isDeleted = false;
    });
});
// doing post operation on save to delete the password
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});
// for creating static model
userSchema.statics.isUserExists = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield exports.User.findOne({ userId: id });
        return existingUser;
    });
};
userSchema.statics.isDeleted = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield exports.User.findOne({ userId: id });
        if (data === null || data === void 0 ? void 0 : data.isDeleted) {
            return true;
        }
        else {
            return false;
        }
    });
};
exports.User = (0, mongoose_1.model)('User', userSchema);
