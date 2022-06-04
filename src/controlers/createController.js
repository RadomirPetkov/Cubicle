const createRouter = require('express').Router()
const cubes = require(`../db.json`)

createRouter.get(`/create`, (req, res) => {
    res.render(`create`)
})

createRouter.post(`/create`, (req, res) => {
    req.body.id = cubes[cubes.length - 1].id + 1
    cubes.push(req.body)
    res.redirect(`/`)
})

module.exports = createRouter