/**
 * Aviation Operations Platform
 * Module: Ticketing
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildTicketingRouter } = require('./routes/ticketing.routes');
const { TicketingService } = require('./services/ticketing.service');
module.exports = { buildTicketingRouter, TicketingService };
