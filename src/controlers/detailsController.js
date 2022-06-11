const cubeService = require(`../cubeService`)

const detailsController = async (req, res) => {
    const currentCube = await cubeService.getOneByID(req.params.id)
    console.log(currentCube);
    res.render(`details.hbs`, currentCube)
}
module.exports = detailsController