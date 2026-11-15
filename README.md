# StudySpot – Server

REST API for StudySpot, a web app for booking study rooms on campus.
Exercise 1: Express server with two entities (Rooms, Buildings) returning static JSON.
Exercise 2: Added controllers - each route calls a controller function (get all, get by id, search, add, update, delete). Add/update/delete return all data for now.

## Run

```bash
npm install
npm start
```

The server runs on http://localhost:3000

## Routes

| Method | Controller function | URL | Returns |
|---|---|---|---|
| GET | – (`app.js`) | `/` | Home – project info and list of endpoints |
| GET | `roomsController.getRooms` | `/api/rooms` | Array of all study rooms |
| GET | `roomsController.getAvailableRooms` | `/api/rooms/available` | Rooms that are available right now |
| GET | `roomsController.filterRooms` | `/api/rooms/search?minCapacity=6` | Rooms with at least this capacity (all rooms if no query) |
| GET | `roomsController.getById` | `/api/rooms/:id` | One room (or 404) |
| POST | `roomsController.addRoom` | `/api/rooms` | Not implemented yet – returns all rooms |
| PUT | `roomsController.updateRoom` | `/api/rooms/:id` | Not implemented yet – returns all rooms |
| DELETE | `roomsController.deleteRoom` | `/api/rooms/:id` | Not implemented yet – returns all rooms |
| GET | `buildingsController.getBuildings` | `/api/buildings` | Array of all campus buildings |
| GET | `buildingsController.getSummary` | `/api/buildings/summary` | Summary data about the buildings |
| GET | `buildingsController.filterBuildings` | `/api/buildings/search?location=North campus` | Buildings in this location (all buildings if no query) |
| GET | `buildingsController.getById` | `/api/buildings/:id` | One building (or 404) |
| POST | `buildingsController.addBuilding` | `/api/buildings` | Not implemented yet – returns all buildings |
| PUT | `buildingsController.updateBuilding` | `/api/buildings/:id` | Not implemented yet – returns all buildings |
| DELETE | `buildingsController.deleteBuilding` | `/api/buildings/:id` | Not implemented yet – returns all buildings |
| any | – (`app.js`) | any other path | 404 error in JSON |

> Data is a static array in memory. POST/PUT/DELETE will be implemented with MySQL later in the course.

## Folder structure

```
studyspot-server/
├── app.js
├── package.json
├── routes/
│   ├── rooms.js
│   └── buildings.js
└── controllers/
    ├── rooms.js
    └── buildings.js
```
