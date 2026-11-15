// Rooms controller - all the logic for the Rooms entity
// Static data in memory (will be replaced by MySQL later in the project)
let rooms = [
  { id: 1, buildingId: 1, name: 'Room 204', floor: 2, capacity: 4, hasProjector: true, hasWhiteboard: true, isAvailableNow: true },
  { id: 2, buildingId: 1, name: 'Room 210', floor: 2, capacity: 6, hasProjector: false, hasWhiteboard: true, isAvailableNow: false },
  { id: 3, buildingId: 2, name: 'Study Room 3', floor: 1, capacity: 6, hasProjector: true, hasWhiteboard: false, isAvailableNow: true },
  { id: 4, buildingId: 2, name: 'Study Room 5', floor: 1, capacity: 2, hasProjector: false, hasWhiteboard: false, isAvailableNow: false },
  { id: 5, buildingId: 3, name: 'Room 112', floor: 1, capacity: 8, hasProjector: true, hasWhiteboard: true, isAvailableNow: true },
];

// GET /api/rooms - all rooms
const getAllRooms = (req, res) => {
  res.json(rooms);
};

// GET /api/rooms/available - rooms that are free right now
const getAvailableRooms = (req, res) => {
  const available = rooms.filter((room) => room.isAvailableNow);
  res.json({ count: available.length, rooms: available });
};

// GET /api/rooms/search?name=...&minCapacity=...&buildingId=... - search rooms
const searchRooms = (req, res) => {
  const { name, minCapacity, buildingId } = req.query;
  let results = rooms;

  if (name) {
    results = results.filter((room) => room.name.toLowerCase().includes(name.toLowerCase()));
  }
  if (minCapacity) {
    results = results.filter((room) => room.capacity >= Number(minCapacity));
  }
  if (buildingId) {
    results = results.filter((room) => room.buildingId === Number(buildingId));
  }

  res.json({ count: results.length, rooms: results });
};

// GET /api/rooms/:id - one room by id
const getRoomById = (req, res) => {
  const room = rooms.find((r) => r.id === Number(req.params.id));
  if (!room) {
    return res.status(404).json({ error: 'Not Found', message: `Room ${req.params.id} does not exist` });
  }
  res.json(room);
};

// POST /api/rooms - add a new room
const addRoom = (req, res) => {
  const newId = rooms.length ? Math.max(...rooms.map((r) => r.id)) + 1 : 1;
  const newRoom = { id: newId, ...(req.body || {}) };
  rooms.push(newRoom);
  res.status(201).json(rooms);
};

// PUT /api/rooms/:id - update a room
const updateRoom = (req, res) => {
  const index = rooms.findIndex((r) => r.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Not Found', message: `Room ${req.params.id} does not exist` });
  }
  rooms[index] = { ...rooms[index], ...(req.body || {}), id: rooms[index].id };
  res.json(rooms);
};

// DELETE /api/rooms/:id - delete a room
const deleteRoom = (req, res) => {
  const exists = rooms.some((r) => r.id === Number(req.params.id));
  if (!exists) {
    return res.status(404).json({ error: 'Not Found', message: `Room ${req.params.id} does not exist` });
  }
  rooms = rooms.filter((r) => r.id !== Number(req.params.id));
  res.json(rooms);
};

module.exports = {
  getAllRooms,
  getAvailableRooms,
  searchRooms,
  getRoomById,
  addRoom,
  updateRoom,
  deleteRoom,
};
