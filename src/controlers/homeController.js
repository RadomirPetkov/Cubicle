const cubeService = require(`../services/cubeService`)

const homeController = async (req, res) => {
const cubes = await cubeService.getAll(req.query)
res.render("./index", {cubes})
}
module.exports = homeController

