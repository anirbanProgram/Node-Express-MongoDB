const express = require('express')
const userRouter = express.Router()

const userController = require('../controller/user_controller')

userRouter.get('/user-details',  userController.userDetails)

module.exports = userRouter