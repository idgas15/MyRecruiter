const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT || 5000
app.set('port', port)

const api = require('./api')
app.use('/api', api)

app.use(express.static('static'))

app.use(morgan('dev'))

app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    res.json(err)
})

app.listen(port, () => {
    console.log(`API server listening on localhost:${port}`)
})
