const express = require('express');
const buildingsController = require('../controllers/buildingsController');

const router = express.Router();

// Specific paths must come before '/:id'
router.get('/', buildingsController.getAllBuildings);
router.get('/summary', buildingsController.getBuildingsSummary);
router.get('/search', buildingsController.searchBuildings);
router.get('/:id', buildingsController.getBuildingById);
router.post('/', buildingsController.addBuilding);
router.put('/:id', buildingsController.updateBuilding);
router.delete('/:id', buildingsController.deleteBuilding);

module.exports = router;
