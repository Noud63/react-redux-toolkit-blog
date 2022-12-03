const express = require('express')
const router = express.Router()
const users = require('../users.json')

router.route('/').get((req, res) => {
    try {
        if(users){
            res.json(users);
        }
        
    } catch (error) {
        console.log(error.message)
    }
    
})

module.exports = router