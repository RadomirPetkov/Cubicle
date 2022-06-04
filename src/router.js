const router = require("express").Router()
const homeController = require(`./controlers/homeController`)
const createController = require(`./controlers/createController`)
const aboutController = require(`./controlers/aboutController`)
const detailsController = require(`./controlers/detailsController`)

router.get(`/`, homeController)
router.get(`/details/:id`, detailsController)
router.use(`/cube`, createController)
router.get(`/about`, aboutController)

module.exports = router