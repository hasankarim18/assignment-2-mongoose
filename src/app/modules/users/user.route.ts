import express from 'express'
import { userController } from './user.controller'
const router = express.Router()

// router.post('/', userController.createUser)

router.post('/', userController.createUser)
router.get('/', userController.getAllUser)
router.get('/:userId', userController.getUser)
router.delete('/:userId', userController.deleteUser)
router.put('/:userId', userController.updateUser)
router.get('/:userId/orders', userController.getUserOrders)
router.get('/:userId/orders/total-price', userController.getTotalPrice)
router.put('/:userId/orders/', userController.creaeOrder)
// router.get('/', (req, res) => {
//   res.send({
//     message: 'route',
//   })
// })

export const userRoutes = router
