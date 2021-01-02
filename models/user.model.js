import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: mongoose.Schema.Types.String,
    // password: mongoose.Schema.Types.String,
    // age: mongoose.Schema.Types.Decimal128,
})

const User = mongoose.model('User', userSchema)

export default User
