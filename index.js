const express = require('express')
const path = require('path')
const members = require('./Members')
const logger = require('./middlewares/logger')


const app = express()

const PORT = process.env.PORT || 5000

// app.use(logger)

app.get('/api/members', (req, res) => {
  res.json(members)
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))



app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))