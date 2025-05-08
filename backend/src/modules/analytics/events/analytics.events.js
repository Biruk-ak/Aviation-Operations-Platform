/**
 * Aviation Operations Platform
 * Module: Analytics
 * Layer: backend/events
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const { EventEmitter } = require('events');

class AnalyticsEvents extends EventEmitter {
  emit(type, payload, ctx = {}) {
    const envelope = { type, module: 'analytics', payload, ctx, at: new Date().toISOString() };
    super.emit(type, envelope);
    super.emit('*', envelope);
    return envelope;
  }
}

module.exports = { AnalyticsEvents };
