/**
 * Aviation Operations Platform
 * Module: Aircraft
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildAircraftRouter } = require('./routes/aircraft.routes');
const { AircraftService } = require('./services/aircraft.service');
module.exports = { buildAircraftRouter, AircraftService };
