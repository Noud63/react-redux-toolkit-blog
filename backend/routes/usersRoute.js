const express = require('express')
const router = express.Router()
const getAllUsersController = require('../controllers/userController')

router.route('/').get(getAllUsersController)

module.exports = router