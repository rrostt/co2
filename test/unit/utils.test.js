const utils = require('../../lib/utils')

describe('utils', () => {
  test('match with no props', () => {
    expect(utils.matchPropertyIfPresent({}, {})).toBeTruthy()
  })
})
