const cubeService = require(`../cubeService`)

const detailsController = async (req, res) => {
    const currentCube = await cubeService.getOneByIDPopulated(req.params.id, "accessories").lean()
    console.log(currentCube);
    res.render(`details.hbs`, { currentCube })
}
module.exports = detailsController