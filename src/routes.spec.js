const routes = require('./routes')
const express = require('express')
const app = express()
let request = require('supertest')
app.use(routes())
request = request(app)

describe('GET /', function () {
  it('respond with json', function (done) {
    request
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        equals(res.body.msg, 'test2', done)
      })
  })
})

function equals (is, shouldBe, done) {
  if (is === shouldBe) return done()
  done('not a match -- should be: "' + shouldBe + '" but it is: "' + is + '"')
}
