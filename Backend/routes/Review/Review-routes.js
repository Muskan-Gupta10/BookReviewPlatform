const express= require('express')
const router= express.Router()
const reviewControllers= require('./Review-controllers')
const AuthenticateUser= require("../middlewares/Auth")

router.route('/').get(AuthenticateUser,reviewControllers.getAllReviews)
router.route("/postReview").post(AuthenticateUser,reviewControllers.postReview)

module.exports= router