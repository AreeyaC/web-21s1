const express = require('express')
const expHbs = require('express-handlebars')
const { json, urlencoded } = require('body-parser')

const { index } = require('./features/index-controller')
const { teamCreateForm } = require('./features/teams-controller')
const { teamsList } = require('./features/country-controller')

const app = express()

// Templates
app.set('views', './views')
app.set('view engine', 'hbs')
app.engine('hbs', expHbs({
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

// TODO: Write your route here // Write your routes here
app.get('/teams/new', teamCreateForm)
app.get('/teams/', teamsList)

// General
app.get('/images/:catchall', (_req, res) => res.redirect('/images/404.jpg'))

module.exports = { app }
