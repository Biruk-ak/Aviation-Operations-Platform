# Architecture

Aviation Operations Platform is a modular monolith:

- React SPA for operations controllers and analysts
- Express API with per-module routers/services
- Mobile clients for crew and ramp workflows
- Shared audit, auth, and rate-limit middleware

## Non-functional targets

- Role-based access per module permission
- Auditable mutations
- Paginated list endpoints
- Import/export for ops data exchange
