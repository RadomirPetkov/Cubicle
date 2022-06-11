const createRouter = require('express').Router()
const cubeService = require(`../cubeService`)

createRouter.get(`/create`, (req, res) => {
    res.render(`create`)
})

createRouter.post(`/create`, async (req, res) => {
    const data = req.body
    try {
        await cubeService.create(data)
        res.redirect(`/`)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = createRouter