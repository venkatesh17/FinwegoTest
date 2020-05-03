const express = require('express');
const router = express.Router()

const pizza = require('./pizza')

router.use('/pizza', pizza)




module.exports = router