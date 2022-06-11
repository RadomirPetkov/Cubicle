const express = require(`express`)

const router = require(`./router`)
const app = express()
const { initializeDatabase } = require(`./config/database`)
const port = 5000
require(`./config/handlebars`)(app)


app.use("/", express.static("static"))
app.use(express.urlencoded({ extended: false }))
app.use(router)

initializeDatabase()
    .then(
        app.listen(port, () => console.log(`App is listening on port ${port}`)))