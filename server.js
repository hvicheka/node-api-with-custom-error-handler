const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
const errorHandler = require('./middleware/error')

// load env vars
dotenv.config({ path: './config/config.env' })

const app = express()

// body parser
app.use(express.json())

// Connect to database 

mongoose.connect("mongodb://localhost:27017/bootcamp", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('Successfully connected to database'))
    .catch(err => {
        console.log('Could not connect to database. Exiting now!...', err)
    })


// Dev logging middleware
app.use(morgan('dev'))

const bootcamps = require('./routes/bootcamp.router')

app.use('/api/v1/bootcamps',bootcamps)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server is running on port', PORT))