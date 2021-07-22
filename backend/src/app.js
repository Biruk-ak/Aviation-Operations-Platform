'use strict';

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { buildAircraftRouter } = require('./modules/aircraft');
const { buildPilotsRouter } = require('./modules/pilots');
const { buildFlightPlanningRouter } = require('./modules/flight-planning');
const { buildMaintenanceRouter } = require('./modules/maintenance');
const { buildGroundOperationsRouter } = require('./modules/ground-operations');
const { buildAirportDashboardRouter } = require('./modules/airport-dashboard');
const { buildCargoRouter } = require('./modules/cargo');
const { buildWeatherRouter } = require('./modules/weather');
const { buildNavigationRouter } = require('./modules/navigation');
const { buildFuelManagementRouter } = require('./modules/fuel-management');
const { buildCrewSchedulingRouter } = require('./modules/crew-scheduling');
const { buildTicketingRouter } = require('./modules/ticketing');
const { buildAnalyticsRouter } = require('./modules/analytics');
const { buildMobileAppsRouter } = require('./modules/mobile-apps');

function createApp() {
  const app = express();
  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: '2mb' }));
  app.use(morgan('dev'));

  app.get('/health', (_req, res) => {
    res.json({ ok: true, service: 'Aviation Operations Platform', ts: new Date().toISOString() });
  });

  app.use('/api/v1/aircraft', buildAircraftRouter());
  app.use('/api/v1/pilots', buildPilotsRouter());
  app.use('/api/v1/flight-planning', buildFlightPlanningRouter());
  app.use('/api/v1/maintenance', buildMaintenanceRouter());
  app.use('/api/v1/ground-operations', buildGroundOperationsRouter());
  app.use('/api/v1/airport-dashboard', buildAirportDashboardRouter());
  app.use('/api/v1/cargo', buildCargoRouter());
  app.use('/api/v1/weather', buildWeatherRouter());
  app.use('/api/v1/navigation', buildNavigationRouter());
  app.use('/api/v1/fuel-management', buildFuelManagementRouter());
  app.use('/api/v1/crew-scheduling', buildCrewSchedulingRouter());
  app.use('/api/v1/ticketing', buildTicketingRouter());
  app.use('/api/v1/analytics', buildAnalyticsRouter());
  app.use('/api/v1/mobile-apps', buildMobileAppsRouter());

  app.use((err, _req, res, _next) => {
    const status = err.status || 500;
    res.status(status).json({ success: false, code: err.code || 'INTERNAL', message: err.message, details: err.details || null });
  });

  return app;
}

module.exports = { createApp };
