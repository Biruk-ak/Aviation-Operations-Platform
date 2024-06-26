/**
 * Aviation Operations Platform
 * Module: FuelManagement
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildFuelManagementRouter } = require('./routes/fuel-management.routes');
const { FuelManagementService } = require('./services/fuel-management.service');
module.exports = { buildFuelManagementRouter, FuelManagementService };
