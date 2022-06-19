const jwt = require(`jwt-promisify`)
const { jwtPrivateKey } = require(`../config/commonConst`)

exports.auth = async (req, res, next) => {

    const sessionCookie = req.cookies.session

    
    if (sessionCookie) {
        user = await jwt.verify(sessionCookie, jwtPrivateKey)
        if (user) {
            req.user = user
        } else {
            //TODO: proper validation error handling
            req.user = "Guest"
        }
    } else {
        req.user = `Guest`
    }
    next()
}

exports.isGuest = (req, res, next)=>{
    if(req.user == "Guest"){
        res.redirect(`/404`)
    }
    next()
}