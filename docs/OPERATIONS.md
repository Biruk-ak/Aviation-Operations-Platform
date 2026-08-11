# Operations Guide

## Local development

```bash
cd backend && npm install && npm run dev
cd frontend && npm install && npm run dev
```

## Health

`GET /health` on the API process.

## Readiness

`GET /ready` for load-balancer readiness probes.
