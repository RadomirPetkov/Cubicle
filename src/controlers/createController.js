const cubeRouter = require('express').Router()
const cubeService = require(`../cubeService`)
const accessoryService = require(`../accessoryService`)

cubeRouter.get(`/create`, (req, res) => {
    res.render(`create`)
})

cubeRouter.post(`/create`, async (req, res) => {
    const data = req.body
    try {
        await cubeService.create(data)
        res.redirect(`/`)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

cubeRouter.get(`/:id/attach-accessory`, async (req, res) => {
    const cubeId = req.params.id
    const currentCube = await cubeService.getOneByID(cubeId).lean()
    const accessories = await accessoryService.getAll().lean()

    res.render(`./attachAccessory`, { currentCube, accessories })
})

cubeRouter.post(`/:id/attach-accessory`, async (req, res) => {
    const accessoryId = req.body.accessory
    const cubeId = req.params.id
    cubeService.attachAccessories(cubeId, accessoryId)
    res.redirect(`/details/${cubeId}`)
})

module.exports = cubeRouter