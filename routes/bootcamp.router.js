const express = require('express')
const router = express.Router()

const bootcamp = require('../controllers/bootcamp.controller')



router.get('/',bootcamp.index)

router.post('/',bootcamp.create)

router.get('/:id',bootcamp.show)

router.put('/:id',bootcamp.update)

router.delete('/:id',bootcamp.destroy)

module.exports = router