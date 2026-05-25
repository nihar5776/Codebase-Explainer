const express = require('express')
const aicontroller = require('../controllers/ai.Controller')

const router = express.Router();

router.post("/response-ai",aicontroller.getReview)


module.exports = router
