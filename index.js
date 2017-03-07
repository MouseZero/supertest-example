const express = require('express')
const request = require('supertest')
const { describe, it } = require('mocha')
const app = express()

app.get('/', function (req, res) {
  res.status(200).json({
    success: true,
    msg: 'test'
  })
})

describe('GET /', function () {
  it('respond with json', function () {
    return request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
  })
})
