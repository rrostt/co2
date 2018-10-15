const express = require('express')
const app = express()

const routes = require('./routes')

app.get('/', routes.index)

app.get('/all', routes.all)

app.get('/q', routes.query)

module.exports = app
