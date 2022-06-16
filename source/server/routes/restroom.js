const router= require('express').Router();
const restroomController= require('../controller/restroom')

//Get all restrooms available in Database
router.get('/all',restroomController.getAllRestrooms);

//Get all restroom which are in reuired range
router.get('/',restroomController.getRestroomWithinRange);

//Get restroom by id
router.get('/:id',restroomController.getRestroomById);

// Rate Restroom
router.put('/:id/rate',restroomController.rateRestroom);

// Create New Restroom
router.post('/',restroomController.createNewRestroom);

module.exports= router;