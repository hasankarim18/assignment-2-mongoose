import { Request, Response } from 'express'
import { userServices } from './user.service'

// controller for create a user
const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const result = await userServices.createUserIntoDb(userData)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (result as any).password
    res.send({
      success: true,
      message: 'User Created Successfully',
      data: result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'User Created Unsuccessfull',
      data: null,
    })
  }
}

// controller for get all user
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserFromDb()
    res.send({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'something went wrong!!!',
      data: null,
    })
  }
}

// single user
const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const result = await userServices.getUser(userId)
    res.send({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'User not found',
      data: {
        code: 404,
        description: 'User not found!',
      },
    })
  }
}

// delete uer
const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    await userServices.deleteUserFromDb(userId)
    res.send({
      success: true,
      message: 'Users deleted successfully!',
      data: null,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'User not found',
      data: {
        code: 404,
        description: error,
      },
    })
  }
}

// #update user
const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const userData = req.body

    const result = await userServices.updateUserIntoDb(userId, userData)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (result as any).password
    //  result.password = ''
    res.send({
      success: true,
      message: 'Users updated successfully!',
      data: result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'User not found',
      data: {
        code: 404,
        description: error,
      },
    })
  }
}

// get user orders
const getUserOrders = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const result = await userServices.getOrderOfUsersFromDb(userId)
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: {
        orders: result,
      },
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'User not found',
      data: {
        code: 404,
        description: error,
      },
    })
  }
}

// get total price
const getTotalPrice = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const totalPrice = await userServices.calculateTotalPrice(userId)
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully.',
      data: {
        totalPrice: totalPrice,
      },
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'User not found',
      data: {
        code: 404,
        description: error,
      },
    })
  }
}

// create order for user

const createOrder = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const order = req.body

    await userServices.createOrderIntoDb(userId, order)
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Order not created!!!!',
      data: {
        code: 404,
        description: error,
      },
    })
  }
}

export const userController = {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  getUserOrders,
  getTotalPrice,
  creaeOrder: createOrder,
}
