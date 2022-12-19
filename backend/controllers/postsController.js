const express = require('express')
const Posts = require('../models/postsModel')

const getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.find({});
        res.status(200).json(posts);
    } catch (error) {
        console.error(error)
    }
}

const deletePost = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const post = await Posts.findByIdAndRemove(id);
        // await post.remove()
        res.status(200).json({ id: req.params.id })
    } catch (error) {
        console.error(error)
    }
}

const updatePost = async (req, res) => {
    const id = req.params.id
    try {
        const post = await Posts.findByIdAndUpdate(id, req.body, { new: true } );
    console.log(post)
        res.status(200).json(post)
    } catch (error) {
        console.error(error)
    }
}

const addNewPost = async (req, res) => {
    try {
        const post = await Posts.create({
            userId: req.body.userId,
            title: req.body.title,
            body: req.body.body,
            reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
            },
        })
        res.status(200).json(post)
    } catch (error) {
        console.error(error)
    }
         
}


module.exports = { getAllPosts, deletePost, updatePost, addNewPost }