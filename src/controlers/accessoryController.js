const accessoryRouter = require('express').Router()
const Accessory = require(`../models/Accessory`)

accessoryRouter.get(`/create`, (req, res) => {
    res.render(`createAccessory.hbs`)
})

accessoryRouter.post(`/create`, async (req, res) => {
    const data = req.body
    await Accessory.create(data)
    res.redirect(`/`)
})


module.exports = accessoryRouter