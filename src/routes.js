const { Router } = require('express')

module.exports = function routes () {
  const route = Router()
  route.get('/', function (req, res) {
    res.status(200).json({
      success: true,
      msg: 'test2'
    })
  })
  return route
}
