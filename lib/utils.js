const matchPropertyIfPresent = (obj, properties) =>
  Object.keys(properties).every(prop => {
    return obj[prop] === undefined || obj[prop] === properties[prop]
  })

module.exports = {
  matchPropertyIfPresent,
}
