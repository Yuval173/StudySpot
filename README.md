# StudySpot – Server

REST API for StudySpot, a web app for booking study rooms on campus.
Exercise 1: Express server with two entities (Rooms, Buildings) returning static JSON.

## Run

```bash
npm install
npm start
```

The server runs on http://localhost:3000

## Routes

| Method | URL | Returns |
|---|---|---|
| GET | `/` | Home – project info and list of endpoints |
| GET | `/api/rooms` | Array of all study rooms |
| GET | `/api/rooms/available` | Rooms that are available right now |
| GET | `/api/buildings` | Array of all campus buildings |
| GET | `/api/buildings/summary` | Summary data about the buildings |
| GET | any other path | 404 error in JSON |

## Folder structure

```
studyspot-server/
├── app.js
├── package.json
└── routes/
    ├── rooms.js
    └── buildings.js
```
