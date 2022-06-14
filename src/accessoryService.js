const Accessory = require(`./models/Accessory`)

exports.create = (data) => Accessory.create(data)


exports.getAll = () => {
    let accessories = Accessory.find()
    return accessories
}