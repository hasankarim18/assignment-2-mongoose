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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
// controller for create a user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userData } = req.body;
        const result = yield user_service_1.userServices.createUserIntoDb(userData);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete result.password;
        res.send({
            success: true,
            message: 'User Created Successfully',
            data: result,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'User Created Unsuccessfull',
            data: null,
        });
    }
});
// controller for get all user
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userServices.getAllUserFromDb();
        res.send({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'something went wrong!!!',
            data: null,
        });
    }
});
// single user
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const result = yield user_service_1.userServices.getUser(userId);
        res.send({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'User not found',
            data: {
                code: 404,
                description: 'User not found!',
            },
        });
    }
});
// delete uer
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        yield user_service_1.userServices.deleteUserFromDb(userId);
        res.send({
            success: true,
            message: 'Users deleted successfully!',
            data: null,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'User not found',
            data: {
                code: 404,
                description: error,
            },
        });
    }
});
// #update user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const { userData } = req.body;
        const result = yield user_service_1.userServices.updateUserIntoDb(userId, userData);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete result.password;
        //  result.password = ''
        res.send({
            success: true,
            message: 'Users updated successfully!',
            data: result,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'User not found',
            data: {
                code: 404,
                description: error,
            },
        });
    }
});
// get user orders
const getUserOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const result = yield user_service_1.userServices.getOrderOfUsersFromDb(userId);
        res.status(200).json({
            success: true,
            message: 'Order fetched successfully!',
            data: {
                orders: result,
            },
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'User not found',
            data: {
                code: 404,
                description: error,
            },
        });
    }
});
// get total price
const getTotalPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const totalPrice = yield user_service_1.userServices.calculateTotalPrice(userId);
        res.status(200).json({
            success: true,
            message: 'Total price calculated successfully.',
            data: {
                totalPrice: totalPrice,
            },
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'User not found',
            data: {
                code: 404,
                description: error,
            },
        });
    }
});
// create order for user
const creaeOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const { order } = req.body;
        yield user_service_1.userServices.createOrderIntoDb(userId, order);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: null,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'Order not created.',
            data: {
                code: 404,
                description: error,
            },
        });
    }
});
exports.userController = {
    createUser,
    getAllUser,
    getUser,
    deleteUser,
    updateUser,
    getUserOrders,
    getTotalPrice,
    creaeOrder,
};
