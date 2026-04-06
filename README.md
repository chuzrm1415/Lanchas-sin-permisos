# Boat Tours Marketplace — Microservices Monorepo

A community-driven marketplace for local boat tour guides. Built with a strict microservices architecture.

## Architecture Overview

```
boat-tours-marketplace/
├── tours-service/        # Micronaut 4.x — port 8081
└── frontend/             # React 18 + Tailwind CSS — port 5173
```

## Services

| Service        | Port  | Tech                   | Description                  |
|----------------|-------|------------------------|------------------------------|
| tours-service  | 8081  | Micronaut 4 / Java 17  | Tour creation & retrieval    |
| frontend       | 5173  | React 18 / Tailwind 3  | User-facing marketplace UI   |

---

## Quick Start

### 1. Tours Service

**Prerequisites:** Java 17+

```bash
cd tours-service
./gradlew run
# Service starts at http://localhost:8081
```

### 2. Frontend

**Prerequisites:** Node.js 18+

```bash
cd frontend
npm install
npm run dev
# App starts at http://localhost:5173
```

---

## API Reference

### Tours Service (`http://localhost:8081`)

#### `POST /tours` — Create a tour
```json
{
  "name": "Sunset Boat Tour",
  "location": "Gulf Bay",
  "price": 50.0
}
```

#### `GET /tours` — List all tours
```json
[
  {
    "id": 1,
    "name": "Sunset Boat Tour",
    "location": "Gulf Bay",
    "price": 50.0
  }
]
```

---

## Design Principles

- **No shared libraries** — each service is fully self-contained
- **No shared database** — each service owns its data
- **No API gateway** — frontend calls services directly
- **No auth required** — open marketplace
- **H2 in-memory DB** — zero external dependencies
