const users = require('../users.json')

const getAllUsersController = ((req, res) => {
    try {
        if (users) {
            res.send({ users });
        }
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = getAllUsersController