const cubes = require(`../db.json`)

const homeController = (req, res) => {
    res.render("./index", { cubes })
}
module.exports = homeController