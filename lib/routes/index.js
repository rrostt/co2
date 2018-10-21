const data = require('../data')
const utils = require('../utils')

const index = (req, res) => {
  res.send('save the planet')
}

const all = (req, res) => {
  res.json(data)
}

const query = (req, res) => {
  res.json(data.filter(datum => utils.matchPropertyIfPresent(datum, req.query)))
}

const food = (req, res) => {
  res.json(
    data.filter(datum =>
      utils.matchPropertyIfPresent(datum, { name: req.params.food })
    )
  )
}

module.exports = {
  index,
  all,
  query,
  food,
}
