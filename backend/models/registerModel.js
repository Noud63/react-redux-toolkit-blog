const mongoose = require('mongoose')

const registerSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
})

const RegisteredUser = mongoose.model('registeredusers', registerSchema)
module.exports = RegisteredUser