const express = require('express')
const router = express.Router()
const uuid = require('uuid')
const members = require('../../Members')

router.get('/', (req, res) => {
  res.json(members)
})

router.get('/:id', (req, res) => {
  const foundMember = members.find(member => member.id === parseInt(req.params.id))

  if (foundMember) {
    res.json(foundMember)
  } else {
    res.status(400).json({errorMsg: `The member with id of ${req.params.id} not found!`})
  }
})

// Add member
router.post('/', (req, res) => {
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({errorMsg: 'Please include a name and an email!'})
  }

  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }
  
  members.push(newMember)

  res.json(newMember)
})

module.exports = router