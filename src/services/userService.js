const User = require(`../models/User`)
const bcrypt = require(`bcrypt`)
const jwt = require(`jwt-promisify`)
const {jwtPrivateKey} = require(`../config/commonConst`)

const saltRounds = 10

exports.register = async (username, passwod) => {
    const hasedPassword = await bcrypt.hash(passwod, saltRounds)

    await User.create({ username, password: hasedPassword })

}

exports.login = async ({ username, password }) => {
    const user = await User.findOne({ username })
    if (!user) {
        //TOOD: proper validation error handling
        return user

    }
    const isAuth = await bcrypt.compare(password, user.password)
    if(isAuth){
        const token = jwt.sign({user}, jwtPrivateKey)
        return token
    }
    //TODO: proper validation error handling
    return;

}