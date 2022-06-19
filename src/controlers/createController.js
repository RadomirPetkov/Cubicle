const cubeRouter = require('express').Router()
const cubeService = require(`../services/cubeService`)
const accessoryService = require(`../services/accessoryService`)
const {isGuest} = require(`../middlewares/authMiddleware`)

cubeRouter.get(`/create`, isGuest, (req, res) => {
    res.render(`create`)
})

cubeRouter.post(`/create`, isGuest, async (req, res) => {
    const data = req.body
    data.owner = req.user.user._id
    
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