import mongoose from 'mongoose'


/**
 * @class userModel
 */

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
})

const User = mongoose.model('User', userSchema, 'users')

export default User
