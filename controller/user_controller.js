const _user = require('../db_model/user_model')

module.exports = {

    userDetails: async (req, res) => {
        try {
            userData = await _user.find()
            res.status(200).send({ success: true, data: userData })
        } catch (error) {
            res.status(400).send(error)
        }
    }

}