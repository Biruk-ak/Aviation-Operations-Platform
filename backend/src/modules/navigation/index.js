/**
 * Aviation Operations Platform
 * Module: Navigation
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildNavigationRouter } = require('./routes/navigation.routes');
const { NavigationService } = require('./services/navigation.service');
module.exports = { buildNavigationRouter, NavigationService };
