const express = require('express')
const cors = require('cors')
const app = express()

const routes = require('./routes')

app.use(cors())

app.get('/', routes.index)

app.get('/all', routes.all)

app.get('/q', routes.query)

module.exports = app
