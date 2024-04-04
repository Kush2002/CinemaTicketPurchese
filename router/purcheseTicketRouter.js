const express = require('express');
const purcheController = require('../controller/purcheController');

const router = express.Router();

router
  .route('/createTicket')
  .post(purcheController.createPurchaseTicket);

module.exports = router;
