const cubeService = require(`../services/cubeService`)

const detailsController = async (req, res) => {
    const currentCube = await cubeService.getOneByIDPopulated(req.params.id, "accessories").lean()  
    const isOwner = currentCube.owner == req.user.user?._id
    currentCube.isOwner = isOwner
    res.render(`details.hbs`, { currentCube })
}
module.exports = detailsController