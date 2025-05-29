/**
 * Aviation Operations Platform
 * Module: Analytics
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildAnalyticsRouter } = require('./routes/analytics.routes');
const { AnalyticsService } = require('./services/analytics.service');
module.exports = { buildAnalyticsRouter, AnalyticsService };
