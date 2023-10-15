var express = require('express');
var router = express.Router();
var bikeController = require('../../controllers/api/bikeControllerAPI');

router.get('/', bikeController.bike_list);
router.post('/create', bikeController.bike_create);
router.post('/delete', bikeController.bike_delete);

module.exports = router;