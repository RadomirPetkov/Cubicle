const userRouter = require(`express`).Router()

userRouter.get(`/login`, (req, res) => {
    res.render(`loginPage`)
})

userRouter.get(`/register`, (req, res) => {
    res.render(`registerPage`)
})


module.exports = userRouter