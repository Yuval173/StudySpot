// Rooms controller - handles the requests for the Rooms entity
// Static data in memory (will be replaced by MySQL later in the project)
const rooms = [
  { id: 1, buildingId: 1, name: 'Room 204', floor: 2, capacity: 4, hasProjector: true, hasWhiteboard: true, isAvailableNow: true },
  { id: 2, buildingId: 1, name: 'Room 210', floor: 2, capacity: 6, hasProjector: false, hasWhiteboard: true, isAvailableNow: false },
  { id: 3, buildingId: 2, name: 'Study Room 3', floor: 1, capacity: 6, hasProjector: true, hasWhiteboard: false, isAvailableNow: true },
  { id: 4, buildingId: 2, name: 'Study Room 5', floor: 1, capacity: 2, hasProjector: false, hasWhiteboard: false, isAvailableNow: false },
  { id: 5, buildingId: 3, name: 'Room 112', floor: 1, capacity: 8, hasProjector: true, hasWhiteboard: true, isAvailableNow: true },
];

// GET /api/rooms - all rooms
exports.getRooms = (req, res) => {
  res.json(rooms);
};

// GET /api/rooms/available - rooms that are free right now
exports.getAvailableRooms = (req, res) => {
  const available = rooms.filter((r) => r.isAvailableNow);
  res.json(available);
};

// GET /api/rooms/search?minCapacity=6 - rooms with at least this capacity
exports.filterRooms = (req, res) => {
  const minCapacity = req.query.minCapacity;
  if (!minCapacity) {
    return res.json(rooms);
  }
  const filtered = rooms.filter((r) => r.capacity >= Number(minCapacity));
  res.json(filtered);
};

// GET /api/rooms/:id - one room by its id
exports.getById = (req, res) => {
  const id = Number(req.params.id);
  const room = rooms.find((r) => r.id === id);
  if (!room) {
    return res.status(404).json({ message: 'Room not found' });
  }
  res.json(room);
};

// POST /api/rooms - add a room (not implemented yet - returns all rooms)
exports.addRoom = (req, res) => {
  res.json(rooms);
};

// PUT /api/rooms/:id - update a room (not implemented yet - returns all rooms)
exports.updateRoom = (req, res) => {
  res.json(rooms);
};

// DELETE /api/rooms/:id - delete a room (not implemented yet - returns all rooms)
exports.deleteRoom = (req, res) => {
  res.json(rooms);
};
