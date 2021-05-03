const express = require('express');

const router = express.Router();
const tourController = require('../controllers/tourController');

// router.param('id', tourController.checkID);
// crete a checkboddy middleware
//check if body contains the name and price
// if not, send back 400 ( bac req)
// add it to the post handler stack
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
