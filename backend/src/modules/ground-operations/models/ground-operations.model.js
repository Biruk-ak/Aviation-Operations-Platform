/**
 * Aviation Operations Platform
 * Module: GroundOperations
 * Layer: backend/model
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const { randomUUID } = require('crypto');

const MODULE = 'ground-operations';

/** In-memory + persistence adapter for enterprise demos and integration tests. */
class GroundOperationsModel {
  constructor(store = new Map()) {
    this.store = store;
    this.indexes = {
      byCode: new Map(),
      byOrg: new Map(),
      byStatus: new Map(),
    };
  }

  _index(record) {
    this.indexes.byCode.set(record.code, record.id);
    const orgSet = this.indexes.byOrg.get(record.organizationId) || new Set();
    orgSet.add(record.id);
    this.indexes.byOrg.set(record.organizationId, orgSet);
    const stSet = this.indexes.byStatus.get(record.status) || new Set();
    stSet.add(record.id);
    this.indexes.byStatus.set(record.status, stSet);
  }

  create(payload) {
    const now = new Date().toISOString();
    const record = {
      id: payload.id || randomUUID(),
      code: payload.code || `${MODULE.toUpperCase()}-${Date.now()}` ,
      name: payload.name || 'Untitled',
      status: payload.status || 'draft',
      createdAt: now,
      updatedAt: now,
      organizationId: payload.organizationId || 'org-default',
      notes: payload.notes || '',
      priority: payload.priority ?? 0,
      isActive: payload.isActive !== false,
      region: payload.region || 'GLOBAL',
      icao: payload.icao || '',
      iata: payload.iata || '',
      latitude: payload.latitude ?? 0,
      longitude: payload.longitude ?? 0,
      timezone: payload.timezone || 'UTC',
      version: 1,
      metadata: payload.metadata || {},
      module: MODULE,
      attr1: payload.attr1 ?? null,
      attr2: payload.attr2 ?? null,
      attr3: payload.attr3 ?? null,
      attr4: payload.attr4 ?? null,
      attr5: payload.attr5 ?? null,
      attr6: payload.attr6 ?? null,
      attr7: payload.attr7 ?? null,
      attr8: payload.attr8 ?? null,
      attr9: payload.attr9 ?? null,
      attr10: payload.attr10 ?? null,
      attr11: payload.attr11 ?? null,
      attr12: payload.attr12 ?? null,
      attr13: payload.attr13 ?? null,
      attr14: payload.attr14 ?? null,
      attr15: payload.attr15 ?? null,
      attr16: payload.attr16 ?? null,
      attr17: payload.attr17 ?? null,
      attr18: payload.attr18 ?? null,
      attr19: payload.attr19 ?? null,
      attr20: payload.attr20 ?? null,
    };
    this.store.set(record.id, record);
    this._index(record);
    return record;
  }

  findById(id) {
    return this.store.get(id) || null;
  }

  findByCode(code) {
    const id = this.indexes.byCode.get(code);
    return id ? this.store.get(id) : null;
  }

  list(filter = {}) {
    let items = Array.from(this.store.values());
    if (filter.organizationId) {
      items = items.filter((x) => x.organizationId === filter.organizationId);
    }
    if (filter.status) {
      const statuses = Array.isArray(filter.status) ? filter.status : [filter.status];
      items = items.filter((x) => statuses.includes(x.status));
    }
    if (filter.search) {
      const q = String(filter.search).toLowerCase();
      items = items.filter((x) =>
        [x.code, x.name, x.notes, x.icao, x.iata].join(' ').toLowerCase().includes(q)
      );
    }
    if (filter.region) {
      items = items.filter((x) => x.region === filter.region);
    }
    const sortBy = filter.sortBy || 'updatedAt';
    const dir = filter.sortDir === 'asc' ? 1 : -1;
    items.sort((a, b) => (a[sortBy] > b[sortBy] ? dir : -dir));
    const page = Math.max(1, Number(filter.page) || 1);
    const pageSize = Math.min(200, Math.max(1, Number(filter.pageSize) || 25));
    const start = (page - 1) * pageSize;
    return { items: items.slice(start, start + pageSize), total: items.length, page, pageSize };
  }

  update(id, patch) {
    const current = this.store.get(id);
    if (!current) return null;
    const next = {
      ...current,
      ...patch,
      id: current.id,
      createdAt: current.createdAt,
      updatedAt: new Date().toISOString(),
      version: current.version + 1,
    };
    this.store.set(id, next);
    this._index(next);
    return next;
  }

  remove(id) {
    const current = this.store.get(id);
    if (!current) return false;
    this.store.delete(id);
    return true;
  }

  statistics(organizationId) {
    const items = Array.from(this.store.values()).filter(
      (x) => !organizationId || x.organizationId === organizationId
    );
    const byStatus = {};
    for (const item of items) {
      byStatus[item.status] = (byStatus[item.status] || 0) + 1;
    }
    return {
      module: MODULE,
      total: items.length,
      active: items.filter((x) => x.isActive).length,
      byStatus,
      avgPriority: items.length
        ? items.reduce((s, x) => s + Number(x.priority || 0), 0) / items.length
        : 0,
    };
  }
}

module.exports = { GroundOperationsModel, MODULE };
