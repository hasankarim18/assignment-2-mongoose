import { Request, Response } from 'express'
import { userServices } from './user.service'

// controller for create a user
const createUser = async (req: Request, res: Response) => {
  try {
    const { userData } = req.body
    const result = await userServices.createUserIntoDb(userData)
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

export const userController = {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
}
