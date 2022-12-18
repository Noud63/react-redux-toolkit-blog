const express = require('express')
const router = express.Router()
const { deletePost, getAllPosts } = require('../controllers/postsController')

router.route('/').get(getAllPosts)
router.route('/:id').delete(deletePost)

module.exports = router