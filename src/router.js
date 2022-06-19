const router = require("express").Router()
const homeController = require(`./controlers/homeController`)
const createController = require(`./controlers/createController`)
const aboutController = require(`./controlers/aboutController`)
const detailsController = require(`./controlers/detailsController`)
const accessoryRouter = require(`./controlers/accessoryController`)
const userRouter = require(`./controlers/userController`)
const editController = require(`./controlers/editController`)

router.get(`/`, homeController)
router.get(`/details/:id`, detailsController)
router.use(`/edit`, editController)
router.use(`/cube`, createController)
router.use(`/accesory`, accessoryRouter)
router.use(`/user`, userRouter)
router.get(`/about`, aboutController)
router.get(`/404`, (req, res)=>{res.render(`404`)})


module.exports = router