const express = require('express')
const router = express.Router()
const { deletePost, getAllPosts, updatePost, addNewPost } = require('../controllers/postsController')

router.route('/').get(getAllPosts)
router.route('/:id').delete(deletePost)
router.route('/:id').put(updatePost)
router.route('/').post(addNewPost)

module.exports = router