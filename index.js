const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({
    success: true,
    msg: 'test'
  })
})

app.listen(3333, function () {
  console.log('Server listening in on 3333')
})
