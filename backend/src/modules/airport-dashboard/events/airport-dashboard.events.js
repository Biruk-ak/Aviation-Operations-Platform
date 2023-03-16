/**
 * Aviation Operations Platform
 * Module: AirportDashboard
 * Layer: backend/events
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const { EventEmitter } = require('events');

class AirportDashboardEvents extends EventEmitter {
  emit(type, payload, ctx = {}) {
    const envelope = { type, module: 'airport-dashboard', payload, ctx, at: new Date().toISOString() };
    super.emit(type, envelope);
    super.emit('*', envelope);
    return envelope;
  }
}

module.exports = { AirportDashboardEvents };
