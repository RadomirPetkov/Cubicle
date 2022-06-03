const router = require("express").Router()
const homeController = require(`./controlers/homeController`)

router.get(`/`, homeController)

module.exports = router