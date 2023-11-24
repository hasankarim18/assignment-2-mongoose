import { TUser } from './user.interface'
import { User } from './user.model'

// query for creating a user in db
const createUserIntoDb = async function (userData: TUser) {
  const result = await User.create(userData)
  return result
}

// query to get all user form db
const getAllUserFromDb = async function () {
  const result = await User.aggregate([
    {
      $project: {
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        address: 1,
      },
    },
  ])
  return result
}

// query to get single user
const getUser = async function (param: string) {
  if (await User.isUserExists(param)) {
    const result = await User.findOne({ userId: param }).select('-password')
    return result
  } else {
    throw new Error(`User not found.`)
  }
}

const deleteUserFromDb = async (id: string) => {
  if (await User.isUserExists(id)) {
    if (await User.isDeleted(id)) {
      throw new Error('User is already deleted!')
    } else {
      const result = await User.updateOne({ userId: id }, { isDeleted: true })
      return result
    }
  } else {
    throw new Error(`User not found.`)
  }
}

export const userServices = {
  createUserIntoDb,
  getAllUserFromDb,
  getUser,
  deleteUserFromDb,
}
