/**
 * Aviation Operations Platform
 * Module: Aircraft
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createAircraftController } = require('../controllers/aircraft.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildAircraftRouter(controller = createAircraftController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('aircraft:read'), controller.list);
  router.get('/stats', authorize('aircraft:read'), controller.getStatistics);
  router.get('/search', authorize('aircraft:read'), controller.search);
  router.get('/export', authorize('aircraft:export'), controller.export);
  router.get('/:id', authorize('aircraft:read'), controller.getById);
  router.get('/:id/audit', authorize('aircraft:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('aircraft:read'), controller.getDependencies);
  router.post('/', authorize('aircraft:write'), controller.create);
  router.post('/import', authorize('aircraft:write'), controller.importBatch);
  router.post('/validate', authorize('aircraft:write'), controller.validate);
  router.post('/bulk-status', authorize('aircraft:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('aircraft:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('aircraft:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('aircraft:write'), controller.scheduleJob);
  router.put('/:id', authorize('aircraft:write'), controller.update);
  router.post('/:id/archive', authorize('aircraft:write'), controller.archive);
  router.post('/:id/restore', authorize('aircraft:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('aircraft:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('aircraft:write'), controller.cancelJob);
  router.delete('/:id', authorize('aircraft:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('aircraft:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('aircraft:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('aircraft:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('aircraft:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('aircraft:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('aircraft:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('aircraft:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('aircraft:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('aircraft:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('aircraft:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('aircraft:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('aircraft:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('aircraft:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('aircraft:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('aircraft:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('aircraft:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('aircraft:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('aircraft:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('aircraft:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('aircraft:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('aircraft:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('aircraft:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('aircraft:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('aircraft:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('aircraft:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildAircraftRouter };
