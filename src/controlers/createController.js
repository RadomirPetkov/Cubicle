const createRouter = require('express').Router()

createRouter.get(`/create`, (req, res)=>{
    res.render(`create`)
})

module.exports = createRouter