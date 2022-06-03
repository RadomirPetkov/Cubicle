const router = require("express").Router()
const homeController = require(`./controlers/homeController`)
const createController = require(`./controlers/createController`)
const aboutController = require(`./controlers/aboutController`)

router.get(`/`, homeController)
router.use(`/cube`, createController)
router.get(`/about`, aboutController)

module.exports = router