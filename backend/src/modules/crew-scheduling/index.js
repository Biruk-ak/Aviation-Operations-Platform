/**
 * Aviation Operations Platform
 * Module: CrewScheduling
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildCrewSchedulingRouter } = require('./routes/crew-scheduling.routes');
const { CrewSchedulingService } = require('./services/crew-scheduling.service');
module.exports = { buildCrewSchedulingRouter, CrewSchedulingService };
