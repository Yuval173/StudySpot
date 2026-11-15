const express = require('express');
const roomsController = require('../controllers/rooms');

const router = express.Router();

// '/search' and '/available' must come before '/:id'
router.get('/', roomsController.getRooms);
router.get('/available', roomsController.getAvailableRooms);
router.get('/search', roomsController.filterRooms);
router.get('/:id', roomsController.getById);
router.post('/', roomsController.addRoom);
router.put('/:id', roomsController.updateRoom);
router.delete('/:id', roomsController.deleteRoom);

module.exports = router;
