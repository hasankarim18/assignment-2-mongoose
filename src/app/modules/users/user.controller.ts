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

export const userController = {
  createUser,
  getAllUser,
}
