const express = require('express');
const buildingsController = require('../controllers/buildings');

const router = express.Router();

// '/summary' and '/search' must come before '/:id'
router.get('/', buildingsController.getBuildings);
router.get('/summary', buildingsController.getSummary);
router.get('/search', buildingsController.filterBuildings);
router.get('/:id', buildingsController.getById);
router.post('/', buildingsController.addBuilding);
router.put('/:id', buildingsController.updateBuilding);
router.delete('/:id', buildingsController.deleteBuilding);

module.exports = router;
