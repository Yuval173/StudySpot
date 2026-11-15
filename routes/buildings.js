const express = require('express');

const router = express.Router();

// Static data (will be replaced by MySQL later in the project)
const buildings = [
  { id: 1, name: 'Information Systems Building', location: 'North campus', openTime: '08:00', closeTime: '21:00', roomsCount: 2, totalCapacity: 10 },
  { id: 2, name: 'Library', location: 'Central campus', openTime: '08:00', closeTime: '22:00', roomsCount: 2, totalCapacity: 8 },
  { id: 3, name: 'Building 5', location: 'South campus', openTime: '09:00', closeTime: '20:00', roomsCount: 1, totalCapacity: 8 },
];

// GET /api/buildings - all buildings
router.get('/', (req, res) => {
  res.json(buildings);
});

// GET /api/buildings/summary - summary data about the buildings
router.get('/summary', (req, res) => {
  const totalRooms = buildings.reduce((sum, b) => sum + b.roomsCount, 0);
  const totalCapacity = buildings.reduce((sum, b) => sum + b.totalCapacity, 0);
  const latestClosing = buildings.reduce((latest, b) => (b.closeTime > latest.closeTime ? b : latest));

  res.json({
    totalBuildings: buildings.length,
    totalRooms,
    totalCapacity,
    openLatest: { name: latestClosing.name, closeTime: latestClosing.closeTime },
  });
});

module.exports = router;
