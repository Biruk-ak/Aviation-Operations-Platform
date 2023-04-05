/**
 * Aviation Operations Platform
 * Module: AirportDashboard
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildAirportDashboardRouter } = require('./routes/airport-dashboard.routes');
const { AirportDashboardService } = require('./services/airport-dashboard.service');
module.exports = { buildAirportDashboardRouter, AirportDashboardService };
