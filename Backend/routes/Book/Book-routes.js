const express =require('express')
const router = express.Router()
const bookControllers= require('./Book-controllers')
const AuthenticateUser= require("../middlewares/Auth")

router.route('/').get(AuthenticateUser,bookControllers.getBooklist)
router.route('/addBook').post(AuthenticateUser,bookControllers.addBook)

module.exports =router