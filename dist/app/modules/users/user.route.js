"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// router.post('/', userController.createUser)
router.post('/', user_controller_1.userController.createUser);
router.get('/', user_controller_1.userController.getAllUser);
router.get('/:userId', user_controller_1.userController.getUser);
router.delete('/:userId', user_controller_1.userController.deleteUser);
router.put('/:userId', user_controller_1.userController.updateUser);
router.get('/:userId/orders', user_controller_1.userController.getUserOrders);
router.get('/:userId/orders/total-price', user_controller_1.userController.getTotalPrice);
router.put('/:userId/orders/', user_controller_1.userController.creaeOrder);
// router.get('/', (req, res) => {
//   res.send({
//     message: 'route',
//   })
// })
exports.userRoutes = router;
