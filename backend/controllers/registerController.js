const express = require('express')
const RegisteredUser = require('../models/registerModel')
const generateToken = require('../utils/generateToken')
const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async (req, res) => {
    const { email } = req.body

        const userExist = await RegisteredUser.findOne({ email })

        if(userExist){
            res.status(400)
            throw new Error('User already exist!')
        }

        const registeredUser = await RegisteredUser.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body .email,
            password: req.body.password
        })
        if (registeredUser) {
            res.status(201).json({
                _id: registeredUser._id,
                name: registeredUser.name,
                username: registeredUser.username,
                email: registeredUser.email,
                isAdmin: registeredUser.isAdmin,
                token: generateToken(registeredUser._id)
            })
        } else {
            res.status(400)
            throw new Error('Invalid user data!')
        }
})

module.exports = registerUser