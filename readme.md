# A Collaborative Software

- Backend built on [y-websocket-server](https://github.com/yjs/y-websocket-server)
- Frontend connects via WebSocket to backend for live collaboration

## Setup & Run

1. **Backend :**

# Spins up a server on port 1234

```bash
cd y-websocket-server
npm i
npm run start
```

2. Frontend

# Serves the app on port 3000.

## The main page connects to an editor that syncs with the backend on port 1234

```bash
cd philoxenia-web
npm i
npm run dev
```
