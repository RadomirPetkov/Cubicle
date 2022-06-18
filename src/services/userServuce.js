const User = require(`../models/User`)
const bcrypt = require(`bcrypt`)
const saltRounds = 10

exports.register = async (username, passwod) => {
    const hasedPassword = await bcrypt.hash(passwod, saltRounds)

    await User.create({ username, password: hasedPassword })

}