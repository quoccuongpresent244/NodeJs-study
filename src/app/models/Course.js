const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')

const Course = new Schema({
    name: String,
    description: String,
    image: {type: String, maxlength: 255},
    slug: String,
    videoId: String,
})

Course.plugin(mongooseDelete, {
    deleteAt : true,
    overrideMethods : true})


module.exports = mongoose.model('Course', Course)