const express = require('express')
const app = express()

const data = require('./data')

app.get('/', (req, res) => {
  res.send('save the planet')
})

app.get('/all', (req, res) => {
  res.json(data)
})

module.exports = app
