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


module.exports = getAllPosts