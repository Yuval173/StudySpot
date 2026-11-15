// Buildings controller - all the logic for the Buildings entity
// Static data in memory (will be replaced by MySQL later in the project)
let buildings = [
  { id: 1, name: 'Information Systems Building', location: 'North campus', openTime: '08:00', closeTime: '21:00', roomsCount: 2, totalCapacity: 10 },
  { id: 2, name: 'Library', location: 'Central campus', openTime: '08:00', closeTime: '22:00', roomsCount: 2, totalCapacity: 8 },
  { id: 3, name: 'Building 5', location: 'South campus', openTime: '09:00', closeTime: '20:00', roomsCount: 1, totalCapacity: 8 },
];

// GET /api/buildings - all buildings
const getAllBuildings = (req, res) => {
  res.json(buildings);
};

// GET /api/buildings/summary - summary data about the buildings
const getBuildingsSummary = (req, res) => {
  const totalRooms = buildings.reduce((sum, b) => sum + b.roomsCount, 0);
  const totalCapacity = buildings.reduce((sum, b) => sum + b.totalCapacity, 0);
  const latestClosing = buildings.length
    ? buildings.reduce((latest, b) => (b.closeTime > latest.closeTime ? b : latest))
    : null;

  res.json({
    totalBuildings: buildings.length,
    totalRooms,
    totalCapacity,
    openLatest: latestClosing ? { name: latestClosing.name, closeTime: latestClosing.closeTime } : null,
  });
};

// GET /api/buildings/search?name=...&location=... - search buildings
const searchBuildings = (req, res) => {
  const { name, location } = req.query;
  let results = buildings;

  if (name) {
    results = results.filter((b) => b.name.toLowerCase().includes(name.toLowerCase()));
  }
  if (location) {
    results = results.filter((b) => b.location.toLowerCase().includes(location.toLowerCase()));
  }

  res.json({ count: results.length, buildings: results });
};

// GET /api/buildings/:id - one building by id
const getBuildingById = (req, res) => {
  const building = buildings.find((b) => b.id === Number(req.params.id));
  if (!building) {
    return res.status(404).json({ error: 'Not Found', message: `Building ${req.params.id} does not exist` });
  }
  res.json(building);
};

// POST /api/buildings - add a new building
const addBuilding = (req, res) => {
  const newId = buildings.length ? Math.max(...buildings.map((b) => b.id)) + 1 : 1;
  const newBuilding = { id: newId, ...(req.body || {}) };
  buildings.push(newBuilding);
  res.status(201).json(buildings);
};

// PUT /api/buildings/:id - update a building
const updateBuilding = (req, res) => {
  const index = buildings.findIndex((b) => b.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Not Found', message: `Building ${req.params.id} does not exist` });
  }
  buildings[index] = { ...buildings[index], ...(req.body || {}), id: buildings[index].id };
  res.json(buildings);
};

// DELETE /api/buildings/:id - delete a building
const deleteBuilding = (req, res) => {
  const exists = buildings.some((b) => b.id === Number(req.params.id));
  if (!exists) {
    return res.status(404).json({ error: 'Not Found', message: `Building ${req.params.id} does not exist` });
  }
  buildings = buildings.filter((b) => b.id !== Number(req.params.id));
  res.json(buildings);
};

module.exports = {
  getAllBuildings,
  getBuildingsSummary,
  searchBuildings,
  getBuildingById,
  addBuilding,
  updateBuilding,
  deleteBuilding,
};
