const cubeService = require(`../services/cubeService`)

const detailsController = async (req, res) => {
    const currentCube = await cubeService.getOneByIDPopulated(req.params.id, "accessories").lean()
    res.render(`details.hbs`, { currentCube })
}
module.exports = detailsController