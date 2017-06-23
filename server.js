const express = require('express')
const fs = require('fs')
const React = require('react')
const serverRender = require(`${process.cwd()}/build/static/js/server.js`).default

const server = express()

server.use(
  '/static',
  express.static(`${process.cwd()}/build/static`, { maxAge: 31536000000 })
)
server.use(
  '/favicon.ico',
  express.static(`${process.cwd()}/build/favicon.ico`, { maxAge: 31536000000 })
)

server.all('*', serverRender(require('./stats.json')))

server.listen(3000, () => {
  console.log('Server has started at http://localhost:3000!')
})
