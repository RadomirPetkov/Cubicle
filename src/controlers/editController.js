const editRouter = require(`express`).Router()
const cubeService = require(`../services/cubeService`)
const Cube = require(`../models/Cube`)

editRouter.get(`/:cubeId`, async (req, res) => {
    const cubeId = req.params.cubeId;
    const currentCube = await cubeService.getOneByID(cubeId).lean()
    currentCube[`diffLevel${currentCube.difficultyLevel}`] = true

    res.render(`./editCubePage`, { currentCube })
})

editRouter.post(`/:cubeId`, async (req, res) => {
    const _id = req.params.cubeId
    const update = req.body
    const result = await Cube.findByIdAndUpdate(_id, update)
    res.redirect(`/details/${_id}`)
})

module.exports = editRouter