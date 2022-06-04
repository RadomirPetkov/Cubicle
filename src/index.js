const express = require(`express`)
const handlebars = require("express-handlebars")
const router = require(`./router`)
const app = express()
const port = 5000

app.engine("hbs", handlebars.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use("/", express.static("static"))
app.use(express.urlencoded({extended: false}))

app.use(router)

app.listen(port, () => console.log(`App is listening on port ${port}`))