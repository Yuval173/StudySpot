const express = require('express');

const roomsRouter = require('./routes/rooms');
const buildingsRouter = require('./routes/buildings');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.json({
    project: 'StudySpot',
    description: 'API for booking study rooms on campus',
    endpoints: [
      'GET /api/rooms',
      'GET /api/rooms/available',
      'GET /api/buildings',
      'GET /api/buildings/summary',
    ],
  });
});

// Entity routes
app.use('/api/rooms', roomsRouter);
app.use('/api/buildings', buildingsRouter);

// Error route - any path that does not exist
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `The path ${req.originalUrl} does not exist`,
  });
});

app.listen(PORT, () => {
  console.log(`StudySpot server is running on http://localhost:${PORT}`);
});
