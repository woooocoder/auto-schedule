require('dotenv').config()
const cors = require('cors') 
const express = require('express')
const port = process.env.PORT || 3001

const mongoose = require('mongoose')
const schedule = require('./model/schedule')
const user = require('./model/user')
uri = process.env.DB_URL 

mongoose.connect(uri)
const db = mongoose.connection
db.on('error', (e) => {
    console.log({
        message: 'Could not connect to DB',
        e: e
    })
})

db.once('connected', () => {
    console.log('DB connected')
})

const app = express()

app.use(express.json())
app.use(cors())
app.use('/schedule', schedule)
app.use('./user', user)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})