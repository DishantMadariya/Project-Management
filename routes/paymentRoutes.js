const express = require('express');
const { markAsPaid } = require('../controllers/paymentController');
const router = express.Router();

router.patch('/:paymentId/paid', markAsPaid);

module.exports = router;
