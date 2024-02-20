const express = require('express')
const app = express()
const port = 8080 

// const jsonwala = require('./jsonwala')
const mongowala = require('./mongowala')

app.listen(port,() => console.log('Main Server is Starting'))