/**
 * Aviation Operations Platform
 * Module: Maintenance
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildMaintenanceRouter } = require('./routes/maintenance.routes');
const { MaintenanceService } = require('./services/maintenance.service');
module.exports = { buildMaintenanceRouter, MaintenanceService };
