import { Request, Response } from 'express'
import { userServices } from './user.service'

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

export const userController = {
  createUser,
}
