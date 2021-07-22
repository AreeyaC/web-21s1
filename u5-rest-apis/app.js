const express = require('express')
const { json, urlencoded } = require('body-parser')

const { readBooks, readBook, createBook, replaceBook, updateBook, deleteBook } = require('./feature/book-controller')
const { readCovidR, readCovid, createCovid, updateCovid, deleteCovid } = require('./feature/covid-controller')

const app = express()

// Middleware
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extended: false }))

// Routes
app.get('/books', readBooks)
app.get('/books/:isbn13', readBook)
app.post('/books/', createBook)
app.put('/books/:isbn13', replaceBook)
app.patch('/books/:isbn13', updateBook)
app.delete('/books/:isbn13', deleteBook)
app.get('/covid', readCovidR)
app.get('/covid/:stateId', readCovid)
app.post('/covid/', createCovid)
app.patch('/covid/:stateId', updateCovid)
app.delete('/covid/:stateId', deleteCovid)

module.exports = { app }
