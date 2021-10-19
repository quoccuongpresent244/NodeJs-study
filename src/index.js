const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./routes')
const methodOverride = require('method-override')
const app = express()
const port = 3000

const db = require('./config/db')

app.use(express.static(path.join(__dirname, './public')))

app.use(methodOverride('_method'))

//connect db
db.connect();

//urlencoded
app.use(express.urlencoded({
    extended : true
}))
app.use(express.json())

//HTTP logger
//app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars({
    extname: ".hbs",
    helpers: {
        sum: (a,b) => a+b,
    }
}))
app.set('view engine', 'hbs') 
app.set('views', path.join(__dirname, 'resource', 'views'))

//Route init
route(app);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))