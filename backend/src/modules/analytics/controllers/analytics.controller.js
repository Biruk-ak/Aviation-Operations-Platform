/**
 * Aviation Operations Platform
 * Module: Analytics
 * Layer: backend/controller
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const { AnalyticsService } = require('../services/analytics.service');

function createAnalyticsController(service = new AnalyticsService()) {
  const wrap = (fn) => async (req, res, next) => {
    try {
      const ctx = { user: req.user, requestId: req.requestId, ip: req.ip };
      const data = await fn(req, ctx);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  };

  return {
    list: wrap(async (req, ctx) => service.list({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    getById: wrap(async (req, ctx) => service.getById({ ...req.body, ...req.query, id: req.params.id }, ctx)),
    create: wrap(async (req, ctx) => service.create({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    update: wrap(async (req, ctx) => service.update({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    remove: wrap(async (req, ctx) => service.remove({ ...req.body, ...req.query, id: req.params.id }, ctx)),
    search: wrap(async (req, ctx) => service.search({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    export: wrap(async (req, ctx) => service.export({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    importBatch: wrap(async (req, ctx) => service.importBatch({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    validate: wrap(async (req, ctx) => service.validate({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    archive: wrap(async (req, ctx) => service.archive({ ...req.body, ...req.query, id: req.params.id }, ctx)),
    restore: wrap(async (req, ctx) => service.restore({ ...req.body, ...req.query, id: req.params.id }, ctx)),
    getAuditTrail: wrap(async (req, ctx) => service.getAuditTrail({ ...req.body, ...req.query, id: req.params.id }, ctx)),
    getStatistics: wrap(async (req, ctx) => service.getStatistics({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    bulkUpdateStatus: wrap(async (req, ctx) => service.bulkUpdateStatus({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    assignOwner: wrap(async (req, ctx) => service.assignOwner({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    attachDocument: wrap(async (req, ctx) => service.attachDocument({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    detachDocument: wrap(async (req, ctx) => service.detachDocument({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    scheduleJob: wrap(async (req, ctx) => service.scheduleJob({ ...req.query, ...req.body, id: req.params.id }, ctx)),
    cancelJob: wrap(async (req, ctx) => service.cancelJob({ ...req.body, ...req.query, id: req.params.id }, ctx)),
    getDependencies: wrap(async (req, ctx) => service.getDependencies({ ...req.body, ...req.query, id: req.params.id }, ctx)),
    domainOperation1: wrap(async (req, ctx) => service.domainOperation1({ ...req.query, ...req.body }, ctx)),
    domainOperation2: wrap(async (req, ctx) => service.domainOperation2({ ...req.query, ...req.body }, ctx)),
    domainOperation3: wrap(async (req, ctx) => service.domainOperation3({ ...req.query, ...req.body }, ctx)),
    domainOperation4: wrap(async (req, ctx) => service.domainOperation4({ ...req.query, ...req.body }, ctx)),
    domainOperation5: wrap(async (req, ctx) => service.domainOperation5({ ...req.query, ...req.body }, ctx)),
    domainOperation6: wrap(async (req, ctx) => service.domainOperation6({ ...req.query, ...req.body }, ctx)),
    domainOperation7: wrap(async (req, ctx) => service.domainOperation7({ ...req.query, ...req.body }, ctx)),
    domainOperation8: wrap(async (req, ctx) => service.domainOperation8({ ...req.query, ...req.body }, ctx)),
    domainOperation9: wrap(async (req, ctx) => service.domainOperation9({ ...req.query, ...req.body }, ctx)),
    domainOperation10: wrap(async (req, ctx) => service.domainOperation10({ ...req.query, ...req.body }, ctx)),
    domainOperation11: wrap(async (req, ctx) => service.domainOperation11({ ...req.query, ...req.body }, ctx)),
    domainOperation12: wrap(async (req, ctx) => service.domainOperation12({ ...req.query, ...req.body }, ctx)),
    domainOperation13: wrap(async (req, ctx) => service.domainOperation13({ ...req.query, ...req.body }, ctx)),
    domainOperation14: wrap(async (req, ctx) => service.domainOperation14({ ...req.query, ...req.body }, ctx)),
    domainOperation15: wrap(async (req, ctx) => service.domainOperation15({ ...req.query, ...req.body }, ctx)),
    domainOperation16: wrap(async (req, ctx) => service.domainOperation16({ ...req.query, ...req.body }, ctx)),
    domainOperation17: wrap(async (req, ctx) => service.domainOperation17({ ...req.query, ...req.body }, ctx)),
    domainOperation18: wrap(async (req, ctx) => service.domainOperation18({ ...req.query, ...req.body }, ctx)),
    domainOperation19: wrap(async (req, ctx) => service.domainOperation19({ ...req.query, ...req.body }, ctx)),
    domainOperation20: wrap(async (req, ctx) => service.domainOperation20({ ...req.query, ...req.body }, ctx)),
    domainOperation21: wrap(async (req, ctx) => service.domainOperation21({ ...req.query, ...req.body }, ctx)),
    domainOperation22: wrap(async (req, ctx) => service.domainOperation22({ ...req.query, ...req.body }, ctx)),
    domainOperation23: wrap(async (req, ctx) => service.domainOperation23({ ...req.query, ...req.body }, ctx)),
    domainOperation24: wrap(async (req, ctx) => service.domainOperation24({ ...req.query, ...req.body }, ctx)),
    domainOperation25: wrap(async (req, ctx) => service.domainOperation25({ ...req.query, ...req.body }, ctx)),
  };
}

module.exports = { createAnalyticsController };
