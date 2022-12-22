const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const loginSchema = mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

loginSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const LoggedInUser = mongoose.model('loggedinusers', loginSchema)
module.exports = LoggedInUser