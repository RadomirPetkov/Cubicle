const userRouter = require(`express`).Router()
const userService = require(`../services/userServuce`)

userRouter.get(`/login`, (req, res) => {
    res.render(`loginPage`)
})


userRouter.get(`/register`, (req, res) => {
    res.render(`registerPage`)
})


userRouter.post(`/register`, async (req, res) => {
    const { username, password, repeatPassword } = req.body

    if (password === repeatPassword) {
        userService.register(username, password)
        res.redirect(`/user/login`)
    }
    else {
        //TODO: needs a better error handling
        res.send(`Your passowrd doesnt match`)
    }
})


module.exports = userRouter