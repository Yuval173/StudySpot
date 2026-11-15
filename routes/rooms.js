const express = require('express');
const roomsController = require('../controllers/roomsController');

const router = express.Router();

// Specific paths must come before '/:id'
router.get('/', roomsController.getAllRooms);
router.get('/available', roomsController.getAvailableRooms);
router.get('/search', roomsController.searchRooms);
router.get('/:id', roomsController.getRoomById);
router.post('/', roomsController.addRoom);
router.put('/:id', roomsController.updateRoom);
router.delete('/:id', roomsController.deleteRoom);

module.exports = router;
