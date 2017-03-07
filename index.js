const express = require('express')
const request = require('supertest')
const app = express()

app.get('/', function (req, res) {
  res.status(200).json({
    success: true,
    msg: 'test'
  })
})

request(app)
  .get('/')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err, res) {
    if (err) throw err
  })
