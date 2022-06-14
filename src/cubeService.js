
const Cube = require('./models/Cube')
const Accessory = require(`./models/Accessory`)

exports.create = (data) => Cube.create(data)

exports.getAll = async () => {

    let cubes = await Cube.find().lean()
    return cubes

    // let { search, from, to } = queryString
    // from = Number(from) || 0
    // to = Number(to) || 7
    // if (search == undefined) {
    //     search = ""
    // }
    // let result = cubes
    //     .filter(x =>
    //         x.name.toLowerCase().includes(search.toLowerCase())
    //         && x.difficultyLevel >= from
    //         && x.difficultyLevel <= to)
    // return [result, search, from, to]
}

exports.getOneByID = (id) => {
    return Cube.findById(id)
}

exports.attachAccessories = async (cubeId, accessoryId) => {
    const currentCube = await Cube.findById(cubeId)
    const currentAccessory = await Accessory.findById(accessoryId)
    currentCube.accessories.push(currentAccessory)
    currentAccessory.cubes.push(currentCube)

    await currentCube.save()
    await currentAccessory.save()
}