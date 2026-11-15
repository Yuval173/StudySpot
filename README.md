# StudySpot – Server

REST API for StudySpot, a web app for booking study rooms on campus.
Exercise 1: Express server with two entities (Rooms, Buildings) returning static JSON.
Exercise 2: Added controllers - each route calls a controller function (get all, get by id, search, add, update, delete).

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
| GET | `roomsController.getAllRooms` | `/api/rooms` | Array of all study rooms |
| GET | `roomsController.getAvailableRooms` | `/api/rooms/available` | Rooms that are available right now |
| GET | `roomsController.searchRooms` | `/api/rooms/search?name=&minCapacity=&buildingId=` | Rooms matching the search |
| GET | `roomsController.getRoomById` | `/api/rooms/:id` | One room (or 404) |
| POST | `roomsController.addRoom` | `/api/rooms` | Array of rooms after adding |
| PUT | `roomsController.updateRoom` | `/api/rooms/:id` | Array of rooms after updating |
| DELETE | `roomsController.deleteRoom` | `/api/rooms/:id` | Array of rooms after deleting |
| GET | `buildingsController.getAllBuildings` | `/api/buildings` | Array of all campus buildings |
| GET | `buildingsController.getBuildingsSummary` | `/api/buildings/summary` | Summary data about the buildings |
| GET | `buildingsController.searchBuildings` | `/api/buildings/search?name=&location=` | Buildings matching the search |
| GET | `buildingsController.getBuildingById` | `/api/buildings/:id` | One building (or 404) |
| POST | `buildingsController.addBuilding` | `/api/buildings` | Array of buildings after adding |
| PUT | `buildingsController.updateBuilding` | `/api/buildings/:id` | Array of buildings after updating |
| DELETE | `buildingsController.deleteBuilding` | `/api/buildings/:id` | Array of buildings after deleting |
| any | – (`app.js`) | any other path | 404 error in JSON |

> Data is kept in memory, so changes made with POST/PUT/DELETE reset when the server restarts.

## Folder structure

```
studyspot-server/
├── app.js
├── package.json
├── routes/
│   ├── rooms.js
│   └── buildings.js
└── controllers/
    ├── roomsController.js
    └── buildingsController.js
```
