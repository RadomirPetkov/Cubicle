const cubes = require(`../db.json`)

const detailsController = (req, res) => {
    const currentCube = cubes[req.params.id]
    res.render(`details.hbs`, {currentCube})
}
module.exports = detailsController