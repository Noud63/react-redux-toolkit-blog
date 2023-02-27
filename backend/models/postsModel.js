const mongoose = require('mongoose')

const postsSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    reactions: {
        like: { type: String },
        comment: { type: String },
        share: { type: String }
    },
}, {
    timestamps: true
})

const Posts = mongoose.model('posts', postsSchema)
module.exports = Posts