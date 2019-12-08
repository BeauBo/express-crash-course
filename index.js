const express = require('express')
const path = require('path')
const logger = require('./middlewares/logger')


const app = express()

const PORT = process.env.PORT || 5000

// app.use(logger)

// Body Parser middleware
app.use(express.json())
app.use(express.urlencoded({ extend: false }))


// Set static folder
app.use(express.static(path.join(__dirname, 'public')))


// Members api routes
app.use('/api/members', require('./routes/api/members'))



app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))