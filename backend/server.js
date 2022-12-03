const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const router = express.Router()
const colors = require('colors')
const PORT = process.env.REACT_APP_PORT || 5000
const userRoute = require('./routes/usersRoute')
const users = require('./users.json')
const posts = require('./posts.json')

app.use(cors())
app.use(express.json())
dotenv.config()

app.get('/users', (req, res) => {
    res.send({
        users
    })
})

app.listen(PORT, console.log(`Server running on port ${PORT}`. yellow))