import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: ['true', 'userName is required'],
  },
  email: {
    type: String,
    require: ['true', 'email is required'],
    unique: true,
  },
  password: {
    type: String,
    require: ['true', 'password is required'],
  },
})

const userModel = mongoose.model('graphql', userSchema)
export default userModel
