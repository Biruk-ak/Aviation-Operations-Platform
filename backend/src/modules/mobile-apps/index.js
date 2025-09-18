/**
 * Aviation Operations Platform
 * Module: MobileApps
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildMobileAppsRouter } = require('./routes/mobile-apps.routes');
const { MobileAppsService } = require('./services/mobile-apps.service');
module.exports = { buildMobileAppsRouter, MobileAppsService };
