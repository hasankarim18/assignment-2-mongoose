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
exports.userServices = void 0;
const config_1 = __importDefault(require("../../config"));
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
// query for creating a user in db
const createUserIntoDb = function (userData) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield user_model_1.User.create(userData);
        return result;
    });
};
// query to get all user form db
const getAllUserFromDb = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield user_model_1.User.aggregate([
            {
                $project: {
                    username: 1,
                    fullName: 1,
                    age: 1,
                    email: 1,
                    address: 1,
                },
            },
        ]);
        return result;
    });
};
// query to get single user
const getUser = function (param) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield user_model_1.User.isUserExists(param)) {
            const result = yield user_model_1.User.findOne({ userId: param }).select('-password');
            return result;
        }
        else {
            throw new Error(`User not found.`);
        }
    });
};
// #delete user form db
const deleteUserFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield user_model_1.User.isUserExists(id)) {
        if (yield user_model_1.User.isDeleted(id)) {
            throw new Error('User is already deleted!');
        }
        else {
            const result = yield user_model_1.User.updateOne({ userId: id }, { isDeleted: true });
            return result;
        }
    }
    else {
        throw new Error(`User not found.`);
    }
});
// #update user in db
const updateUserIntoDb = (id, updatedDoc) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield user_model_1.User.isUserExists(id)) {
        if (yield user_model_1.User.isDeleted(id)) {
            throw new Error('User is already deleted!');
        }
        else {
            // const filter = { userId: id }
            // const doc = await User.findOneAndUpdate(filter, updatedDoc)
            // return doc
            const user = yield user_model_1.User.findOne({ userId: id });
            // Update the user with the new data from the request body
            if (user !== null) {
                user.set(updatedDoc);
                user.password = yield bcrypt_1.default.hash(user.password, Number(config_1.default.bycrpt_salt_rounds));
                // Save the updated user
                const result = yield user.save();
                return result;
            }
        }
    }
    else {
        throw new Error(`User not found.`);
    }
});
exports.userServices = {
    createUserIntoDb,
    getAllUserFromDb,
    getUser,
    deleteUserFromDb,
    updateUserIntoDb,
};
