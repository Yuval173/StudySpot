// Buildings controller - handles the requests for the Buildings entity
// Static data in memory (will be replaced by MySQL later in the project)
const buildings = [
  { id: 1, name: 'Information Systems Building', location: 'North campus', openTime: '08:00', closeTime: '21:00', roomsCount: 2, totalCapacity: 10 },
  { id: 2, name: 'Library', location: 'Central campus', openTime: '08:00', closeTime: '22:00', roomsCount: 2, totalCapacity: 8 },
  { id: 3, name: 'Building 5', location: 'South campus', openTime: '09:00', closeTime: '20:00', roomsCount: 1, totalCapacity: 8 },
];

// GET /api/buildings - all buildings
exports.getBuildings = (req, res) => {
  res.json(buildings);
};

// GET /api/buildings/summary - summary data about the buildings
exports.getSummary = (req, res) => {
  const totalRooms = buildings.reduce((sum, b) => sum + b.roomsCount, 0);
  const totalCapacity = buildings.reduce((sum, b) => sum + b.totalCapacity, 0);
  const latestClosing = buildings.reduce((latest, b) => (b.closeTime > latest.closeTime ? b : latest));

  res.json({
    totalBuildings: buildings.length,
    totalRooms,
    totalCapacity,
    openLatest: { name: latestClosing.name, closeTime: latestClosing.closeTime },
  });
};

// GET /api/buildings/search?location=North campus - buildings in this location
exports.filterBuildings = (req, res) => {
  const location = req.query.location;
  if (!location) {
    return res.json(buildings);
  }
  const filtered = buildings.filter((b) => b.location === location);
  res.json(filtered);
};

// GET /api/buildings/:id - one building by its id
exports.getById = (req, res) => {
  const id = Number(req.params.id);
  const building = buildings.find((b) => b.id === id);
  if (!building) {
    return res.status(404).json({ message: 'Building not found' });
  }
  res.json(building);
};

// POST /api/buildings - add a building (not implemented yet - returns all buildings)
exports.addBuilding = (req, res) => {
  res.json(buildings);
};

// PUT /api/buildings/:id - update a building (not implemented yet - returns all buildings)
exports.updateBuilding = (req, res) => {
  res.json(buildings);
};

// DELETE /api/buildings/:id - delete a building (not implemented yet - returns all buildings)
exports.deleteBuilding = (req, res) => {
  res.json(buildings);
};
