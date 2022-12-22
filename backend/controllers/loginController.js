const express = require('express')
const bcrypt = require('bcrypt')
const RegisteredUser = require('../models/registerModel')
const generateToken = require('../utils/generateToken')
const asyncHandler = require('express-async-handler')


const loginController = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // Check for user email
    const user = await RegisteredUser.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

module.exports = loginController