/**
 * Aviation Operations Platform
 * Module: Navigation
 * Layer: backend/events
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const { EventEmitter } = require('events');

class NavigationEvents extends EventEmitter {
  emit(type, payload, ctx = {}) {
    const envelope = { type, module: 'navigation', payload, ctx, at: new Date().toISOString() };
    super.emit(type, envelope);
    super.emit('*', envelope);
    return envelope;
  }
}

module.exports = { NavigationEvents };
