const bodyParser = require('body-parser')
const exprees = require('express')
const port = 3003

const server = exprees()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.listen(port, function() {
  console.log(`o Back esta rodando Porra na porta ${port}`)
})