const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name: String,
    description: String,
    image: {type: String, maxlength: 255}
})


module.exports = mongoose.model('Course', Course)