const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    id: { 
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Users = mongoose.model('users', usersSchema)
module.exports = Users