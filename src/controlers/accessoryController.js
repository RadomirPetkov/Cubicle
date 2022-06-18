const accessoryRouter = require('express').Router()
const Accessory = require(`../models/Accessory`)
const accessoryService = require(`../services/accessoryService`)


accessoryRouter.get(`/create`, (req, res) => {
    res.render(`createAccessory.hbs`)
})

accessoryRouter.post(`/create`, async (req, res) => {
    const data = req.body
    await accessoryService.create(data)
    res.redirect(`/`)
})


module.exports = accessoryRouter