const express = require('express')
const Users = require('../models/userModel')


const getAllUsersController = async (req, res) => {
    try {
            const users = await Users.find({})
            res.status(200).json(users)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = getAllUsersController