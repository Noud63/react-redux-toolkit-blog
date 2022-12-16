const express = require('express')
const router = express.Router()
const getAllPosts = require('../controllers/postsController')

router.route('/').get(getAllPosts)

module.exports = router