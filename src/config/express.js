const express = require(`express`)
const router = require(`./router`)
const app = express()

module.exports = () => {
    app.use("/", express.static("static"))
    app.use(express.urlencoded({ extended: false }))
    app.use(router)
}