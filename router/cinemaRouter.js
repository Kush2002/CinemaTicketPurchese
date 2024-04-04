const express = require('express');
const cinemaController = require('../controller/cinemaController');

const router = express.Router();

router
  .route('/addCinema')
  .post(cinemaController.createCinema)

module.exports = router;
