const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')
const router = express.Router()
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const messages = []

nextApp.prepare()
.then(() => {

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

  app.post('/hooked', function(req, res) {
    res.sendStatus(200)

    io.emit('message', req.body)
  })

  module.exports = router

})

.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
