const express = require('express')
const exphbs = require('express-handlebars')
const { json, urlencoded } = require('body-parser')

const { index } = require('./features/index-controller')
const { CinemaList, CinemaDetails } = require('./features/cinema-controller')
const { filmList, filmDetails } = require('./features/film-controller')
const { bookingForm, bookingSubmit } = require('./features/booking-controller')
const { myTicketsAPI } = require('./features/ticket-controller')

const app = express()

// Templates
app.set('views', './views')
app.set('view engine', 'hbs')
app.engine('hbs', exphbs({
  extname: '.hbs',
  defaultLayout: false,
  partialsDir: ['./views/partials', './views/layouts']
}))

// Middleware
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extended: false }))

// Routes
app.get('/', index)
app.get('/cinemas', CinemaList)
app.get('/cinemas/:slug', CinemaDetails)
app.get('/films', filmList)
app.get('/films/:slug', filmDetails)
app.get('/book', bookingForm)
app.post('/book', bookingSubmit)
app.get('/tickets', myTicketsAPI)
app.get('/api/v1/tickets', myTicketsAPI)

module.exports = { app }
