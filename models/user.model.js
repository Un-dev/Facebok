const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
    age: mongoose.Schema.Types.Decimal128,
})

module.exports = mongoose.model('User', userSchema)