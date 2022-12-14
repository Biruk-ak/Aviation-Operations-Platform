/**
 * Aviation Operations Platform
 * Module: GroundOperations
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildGroundOperationsRouter } = require('./routes/ground-operations.routes');
const { GroundOperationsService } = require('./services/ground-operations.service');
module.exports = { buildGroundOperationsRouter, GroundOperationsService };
