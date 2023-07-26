/**
 * Aviation Operations Platform
 * Module: Cargo
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildCargoRouter } = require('./routes/cargo.routes');
const { CargoService } = require('./services/cargo.service');
module.exports = { buildCargoRouter, CargoService };
