/**
 * Aviation Operations Platform
 * Module: Weather
 * Layer: backend/index
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */
'use strict';

const { buildWeatherRouter } = require('./routes/weather.routes');
const { WeatherService } = require('./services/weather.service');
module.exports = { buildWeatherRouter, WeatherService };
