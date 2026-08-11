# Aviation Operations Platform

Enterprise aviation management suite for airlines, airports, and ground handlers. The platform unifies fleet, crew, flight planning, maintenance, cargo, and airport operations in one modular web application with a Node.js API and mobile clients for field teams.

[![License](https://img.shields.io/badge/license-UNLICENSED-lightgrey.svg)](./LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-18-blue.svg)](https://react.dev/)
[![Express](https://img.shields.io/badge/express-4-black.svg)](https://expressjs.com/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Overview](#api-overview)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

**Aviation Operations Platform** is designed for day-of-operations and planning teams who need a single source of truth across:

| Domain | Capability |
| --- | --- |
| Aircraft | Fleet registry, airworthiness, configuration |
| Pilots | Profiles, ratings, medical certificates |
| Flight Planning | Routes, OFP, weight & balance |
| Maintenance | Schedules, work orders, MEL/CDL |
| Ground Operations | Ramp, turnaround, GSE tracking |
| Airport Dashboard | Stands, slots, delays, ops board |
| Cargo | AWB, ULD, dangerous goods, capacity |
| Weather | METAR/TAF, SIGMET, briefing packs |
| Navigation | Navaids, procedures, NOTAM integration |
| Fuel Management | Orders, uplift, burn analysis |
| Crew Scheduling | Rosters, legality, pairings |
| Ticketing | PNRs, inventory, check-in, boarding |
| Analytics | OTP, cost, utilization KPIs |
| Mobile Apps | Crew & ops field sync |

---

## Features

- Modular Express API with per-domain routers, services, validators, and audit hooks
- React (Vite) operations console with module navigation and list/filter workflows
- Shared platform libraries for units, geo, scheduling, compliance, and reporting
- Seed datasets for demos and integration testing
- Mobile workspace for crew and ground operations clients
- Role-oriented route permissions and rate limiting on the API edge

---

## Architecture

```text
┌────────────────────┐     ┌──────────────────────────┐
│  React Web (Vite)  │────▶│  Express API (/api/v1/*)  │
└────────────────────┘     └────────────┬─────────────┘
                                       │
┌────────────────────┐                 │
│  Mobile clients    │─────────────────┘
└────────────────────┘
          │
          ▼
   Module services (Aircraft, Pilots, … Analytics)
```

See [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) for non-functional targets and module boundaries.

---

## Tech Stack

- **Frontend:** React 18, React Router, Vite
- **Backend:** Node.js, Express, Helmet, CORS, Morgan
- **Mobile:** React Native–oriented screens and sync helpers
- **Tooling:** npm workspaces style (separate `frontend`, `backend`, `mobile` packages)

---

## Prerequisites

- Node.js **18+** (Node 20 recommended)
- npm **9+**
- Git
- Optional: a modern browser for the web console

---

## Installation

Clone the repository:

```bash
git clone git@github.com:Biruk-ak/Aviation-Operations-Platform.git
cd Aviation-Operations-Platform
```

Install and run the API:

```bash
cd backend
npm install
npm run dev
```

In a second terminal, install and run the web app:

```bash
cd frontend
npm install
npm run dev
```

The Vite dev server proxies `/api` to `http://localhost:4000`.

Optional mobile package install:

```bash
cd mobile
npm install
```

---

## Usage

### Start the platform locally

1. Start the API on port **4000** (`npm run dev` in `backend/`).
2. Start the web UI on port **5173** (`npm run dev` in `frontend/`).
3. Open [http://localhost:5173](http://localhost:5173) and select a module from the sidebar.

### Health check

```bash
curl http://localhost:4000/health
```

Example response:

```json
{
  "ok": true,
  "service": "Aviation Operations Platform",
  "ts": "2026-01-18T12:00:00.000Z"
}
```

### Example API calls

List aircraft (auth shim enabled for local demos):

```bash
curl "http://localhost:4000/api/v1/aircraft"
```

Create a pilot record:

```bash
curl -X POST "http://localhost:4000/api/v1/pilots" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Capt. A. Bekele",
    "code": "PLT-1001",
    "icao": "HAAB",
    "status": "active",
    "region": "AFR"
  }'
```

Search flight planning records:

```bash
curl "http://localhost:4000/api/v1/flight-planning/search?query=HAAB"
```

Export maintenance data:

```bash
curl "http://localhost:4000/api/v1/maintenance/export?format=json"
```

### Environment variables

| Variable | Default | Description |
| --- | --- | --- |
| `PORT` | `4000` | API listen port |
| `AOP_ALLOW_ANON` | unset | When set to `1`, keeps the local auth shim permissive |

Copy secrets into a local `.env` (never commit real keys — see `.gitignore`).

---

## API Overview

All module routes are mounted under `/api/v1/<module>`:

| Module | Base path |
| --- | --- |
| Aircraft | `/api/v1/aircraft` |
| Pilots | `/api/v1/pilots` |
| Flight Planning | `/api/v1/flight-planning` |
| Maintenance | `/api/v1/maintenance` |
| Ground Operations | `/api/v1/ground-operations` |
| Airport Dashboard | `/api/v1/airport-dashboard` |
| Cargo | `/api/v1/cargo` |
| Weather | `/api/v1/weather` |
| Navigation | `/api/v1/navigation` |
| Fuel Management | `/api/v1/fuel-management` |
| Crew Scheduling | `/api/v1/crew-scheduling` |
| Ticketing | `/api/v1/ticketing` |
| Analytics | `/api/v1/analytics` |
| Mobile Apps | `/api/v1/mobile-apps` |

Common endpoints per module: `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id`, `GET /search`, `GET /stats`, `GET /export`.

---

## Project Structure

```text
Aviation-Operations-Platform/
├── backend/                 # Express API
│   └── src/
│       ├── app.js
│       ├── server.js
│       ├── middleware/
│       ├── modules/         # Domain modules
│       ├── platform/        # Shared libraries
│       └── data/seeds/
├── frontend/                # React (Vite) console
│   └── src/
│       ├── App.tsx
│       ├── modules/
│       └── platform/
├── mobile/                  # Field / crew clients
├── docs/                    # Architecture & ops docs
├── .github/                 # Issue & PR templates
├── CONTRIBUTING.md
└── README.md
```

---

## Contributing

Contributions are welcome. Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) for setup, branch naming, commit style, and pull request expectations. Use the issue templates under [`.github/ISSUE_TEMPLATE`](./.github/ISSUE_TEMPLATE) when reporting bugs or proposing features.

---

## License

UNLICENSED — proprietary project by Biruk-ak. Contact the author before redistribution.

---

## Author

**Biruk-ak**  
Email: [birukaklilu0110@gmail.com](mailto:birukaklilu0110@gmail.com)  
GitHub: [github.com/Biruk-ak](https://github.com/Biruk-ak)
