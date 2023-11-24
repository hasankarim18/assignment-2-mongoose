import express from 'express'
import { userController } from './user.controller'
const router = express.Router()

// router.post('/', userController.createUser)

router.post('/', userController.createUser)
router.get('/', userController.getAllUser)
router.get('/:userId', userController.getUser)
router.delete('/:userId', userController.deleteUser)
// router.get('/', (req, res) => {
//   res.send({
//     message: 'route',
//   })
// })

export const userRoutes = router
