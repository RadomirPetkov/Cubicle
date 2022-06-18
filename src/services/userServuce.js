const User = require(`../models/User`)
const bcrypt = require(`bcrypt`)
const saltRounds = 10

exports.register = async (username, passwod) => {
    const hasedPassword = await bcrypt.hash(passwod, saltRounds)

    await User.create({ username, password: hasedPassword })

}

exports.login = async ({ username, password }) => {
    const user = await User.findOne({ username })
    if (!user) {
        return user

    }
    const isAuth = await bcrypt.compare(password, user.password)
    if(isAuth){
        return user
    }
    return;

}