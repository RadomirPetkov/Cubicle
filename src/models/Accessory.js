const mongoose = require(`mongoose`)

const accessoryShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: /^https?/g,
            message: "Image URLshould be a link"
        }
    },
    description: {
        type: String,
        required: true,
        maxlength: 120
    },
    cubes: [
        {
            type: mongoose.Types.ObjectId,
            ref: `Cube`
        }
    ]
})

const Accessory = mongoose.model(`Accessory`, accessoryShema)

module.exports = Accessory