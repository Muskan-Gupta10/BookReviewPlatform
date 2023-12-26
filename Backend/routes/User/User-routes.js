const userController= require("./User-controllers")
const express= require('express')
const router= express.Router()

router.route("/createUser").post(userController.createUser)
router.route('/login').post(userController.login)

module.exports=router
