const express = require('express')
const router = express.Router()
const { deletePost, getAllPosts, updatePost } = require('../controllers/postsController')

router.route('/').get(getAllPosts)
router.route('/:id').delete(deletePost)
router.route('/:id').put(updatePost)

module.exports = router