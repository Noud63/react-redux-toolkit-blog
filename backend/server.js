const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const router = express.Router()
const colors = require('colors')
const PORT = process.env.REACT_APP_PORT || 5000
const userRoute = require('./routes/usersRoute')
const postsRoute = require('./routes/postsRoute')
const users = require('./users.json')
// let posts = require('./posts.json')
const connectToDB = require('./connectdb/config')

app.use(cors())
app.use(express.json())
dotenv.config()
connectToDB()

app.use('/users', userRoute)

app.use('/posts', postsRoute)

app.delete('/posts/:id', (req, res) => {
    let id = req.params.id
    id = Number(id)
    posts = posts.filter(post => {
        return post.id !== id
    })
    res.send({ posts })
})



app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow))