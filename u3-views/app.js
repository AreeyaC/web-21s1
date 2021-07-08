const expHbs = require('express-handlebars')
const { courseDetails } = require('./features/courseController')
const { index } = require('./features/indexController')
const app = express()

// Templates
app.set('views', './views')
app.set('view engine', 'hbs')
app.engine('hbs', expHbs({
  extname: '.hbs',
  defaultLayout: false,
  partialsDir: ['./views/partials', './views/layouts']
}))

// TODO later
app.get('/', index)
