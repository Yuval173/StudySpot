const express = require('express');

const router = express.Router();

// Static data (will be replaced by MySQL later in the project)
const rooms = [
  { id: 1, buildingId: 1, name: 'Room 204', floor: 2, capacity: 4, hasProjector: true, hasWhiteboard: true, isAvailableNow: true },
  { id: 2, buildingId: 1, name: 'Room 210', floor: 2, capacity: 6, hasProjector: false, hasWhiteboard: true, isAvailableNow: false },
  { id: 3, buildingId: 2, name: 'Study Room 3', floor: 1, capacity: 6, hasProjector: true, hasWhiteboard: false, isAvailableNow: true },
  { id: 4, buildingId: 2, name: 'Study Room 5', floor: 1, capacity: 2, hasProjector: false, hasWhiteboard: false, isAvailableNow: false },
  { id: 5, buildingId: 3, name: 'Room 112', floor: 1, capacity: 8, hasProjector: true, hasWhiteboard: true, isAvailableNow: true },
];

// GET /api/rooms - all rooms
router.get('/', (req, res) => {
  res.json(rooms);
});

// GET /api/rooms/available - rooms that are free right now
router.get('/available', (req, res) => {
  const available = rooms.filter((room) => room.isAvailableNow);
  res.json({ count: available.length, rooms: available });
});

module.exports = router;
