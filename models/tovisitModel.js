const mongoose = require('mongoose')

const tovisitSchema = new mongoose.Schema({
    placeName: String,
    }, {
    timestamps: true
})

module.exports = mongoose.model('tovisit', tovisitSchema)