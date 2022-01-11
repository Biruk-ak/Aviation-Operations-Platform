/**
 * Aviation Operations Platform
 * Module: Pilots
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildPilotsRouter } = require('./routes/pilots.routes');
const { PilotsService } = require('./services/pilots.service');
module.exports = { buildPilotsRouter, PilotsService };
