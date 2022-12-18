const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    
}, {
    timestamps: true
})

const Users = mongoose.model('posts', usersSchema)
module.exports = Users