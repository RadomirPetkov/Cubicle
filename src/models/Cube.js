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
    imageUrl: {
        type: String,
        required: true,
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 7

    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: "accessory"
        }
    ]
})

const Cube = mongoose.model(`Cube`, cubeSchema)

module.exports = Cube