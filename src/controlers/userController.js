const userRouter = require(`express`).Router()
const userService = require(`../services/userService`)

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

userRouter.post(`/login`, async (req, res) => {
    const userData = req.body
    const user = await userService.login(userData)
    if (user) {
        res.cookie(`session`, user)
        res.redirect(`/`)
    }
    else {
        res.send(`Invalid user`)
    }

})
userRouter.get(`/logout`, (req, res) => {
    res.clearCookie(`session`)
    res.redirect(`/`)
})


module.exports = userRouter