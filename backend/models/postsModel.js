const mongoose = require('mongoose')

const postsSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    id: {
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
        thumbsUp: {type: String},
        wow: {type: String},
        heart: {type: String},
        rocket: {type: String},
        coffee: {type: String}
       }
}, {
    timestamps: true
})

const Posts = mongoose.model('posts', postsSchema)
module.exports = Posts