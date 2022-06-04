const cubeService = require(`../cubeService.js`)

const homeController = (req, res) => {
    const [cubes, search, from, to] = cubeService.getAll(req.query)
    res.render("./index", { cubes, search, from, to })
}
module.exports = homeController

