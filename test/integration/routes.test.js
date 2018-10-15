const request = require('supertest')
const app = require('../../lib/app')

describe('routes', () => {
  test('undefined', () => {
    return request(app)
      .get('/undefined')
      .expect(404)
  })

  test('index', () => {
    return request(app)
      .get('/')
      .expect(200)
      .then(response => {
        expect(response.text).toBe('save the planet')
      })
  })

  test('/all', () => {
    return request(app)
      .get('/all')
      .expect(200)
      .then(response => {
        expect(response.body.length).toBeGreaterThan(0)
      })
  })

  test('/q?name=beef', () => {
    return request(app)
      .get('/q')
      .query({ name: 'beef' })
      .expect(200)
      .then(response => {
        expect(response.body.length).toBe(1)
        expect(response.body[0].co2.mean).toBe(26)
      })
  })

  test('/q?name=fruit', () => {
    return request(app)
      .get('/q')
      .query({ name: 'fruit' })
      .expect(200)
      .then(response => {
        expect(response.body.length).toBe(2)
      })
  })

  test('/q?country=bogus', () => {
    return request(app)
      .get('/q')
      .query({ country: 'bogus' })
      .expect(200)
      .then(response => {
        expect(response.body.length).toBe(0)
      })
  })
})
