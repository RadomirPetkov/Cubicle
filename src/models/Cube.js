const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 120
    },
    iamgeUrl: {
        type: String,
        required: true,
    },
    dificultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 7

    }
})

const Cube = mongoose.model(`Cube`, cubeSchema)

module.exports = Cube