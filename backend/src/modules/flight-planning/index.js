/**
 * Aviation Operations Platform
 * Module: FlightPlanning
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildFlightPlanningRouter } = require('./routes/flight-planning.routes');
const { FlightPlanningService } = require('./services/flight-planning.service');
module.exports = { buildFlightPlanningRouter, FlightPlanningService };
