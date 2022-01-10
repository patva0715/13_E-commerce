const express = require('express')
const router = express.Router()
const { authUser, getUserProfile,registerUser, updateUserProfile } = require('../controllers/userController.js')
const {protect} = require('../middleWare/authMiddleWare.js')

router.route('/').post(registerUser)
router.post('/login',authUser)
// router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)

module.exports = router
