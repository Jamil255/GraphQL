import userModel from '../models/userSchema.js'

export const getAllUsers = async () => {
  try {
    const result = await userModel.find()
    return result
  } catch (error) {
    console.log(error)
  }
}
