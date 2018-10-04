const express = require('express')
const router = express.Router()

require('./routes/recruiter.route')(router)

module.exports = router
