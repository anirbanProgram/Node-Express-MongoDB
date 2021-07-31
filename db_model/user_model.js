const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: String,
    name: String,
    contact: Number,
    email: { type: String, lowercase: true },
    password: String,
    createdAt: { type: Date, default: Date.now },
})

const User = mongoose.model('users', userSchema)

module.exports = User