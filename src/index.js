const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, './public')))

//urlencoded
app.use(express.urlencoded({
    extended : true
}))
app.use(express.json())

//HTTP logger
//app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars({
    extname: ".hbs"
}))
app.set('view engine', 'hbs') 
app.set('views', path.join(__dirname, 'resource/views'))

app.get('/', (req, res) => res.render('home'))
app.get('/news', (req, res) => res.render('news'))
app.get('/search', (req, res) => res.render('search'))

app.post('/search', (req, res) => {
    console.log(req.body.q)

    res.send('')
})

app.listen(port, () => console.log('App listening at http://localhost:3000'))