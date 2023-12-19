const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    address: String,
    tel: String
})

const UserModel = mongoose.model('users',userSchema)
module.exports = UserModel