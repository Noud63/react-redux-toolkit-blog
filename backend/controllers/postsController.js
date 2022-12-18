const express = require('express')
const Posts = require('../models/postsModel')

const getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.find({});
        res.send(posts);
    } catch (error) {
        console.error(error)
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params.id
    try {
        const post = await Posts.findOneAndRemove(id);
        await post.remove()
        res.status(200).json({ id: req.params.id })
    } catch (error) {
        console.error(error)
    }
}


module.exports = { getAllPosts, deletePost }