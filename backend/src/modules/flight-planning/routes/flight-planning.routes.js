/**
 * Aviation Operations Platform
 * Module: FlightPlanning
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createFlightPlanningController } = require('../controllers/flight-planning.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildFlightPlanningRouter(controller = createFlightPlanningController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('flight-planning:read'), controller.list);
  router.get('/stats', authorize('flight-planning:read'), controller.getStatistics);
  router.get('/search', authorize('flight-planning:read'), controller.search);
  router.get('/export', authorize('flight-planning:export'), controller.export);
  router.get('/:id', authorize('flight-planning:read'), controller.getById);
  router.get('/:id/audit', authorize('flight-planning:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('flight-planning:read'), controller.getDependencies);
  router.post('/', authorize('flight-planning:write'), controller.create);
  router.post('/import', authorize('flight-planning:write'), controller.importBatch);
  router.post('/validate', authorize('flight-planning:write'), controller.validate);
  router.post('/bulk-status', authorize('flight-planning:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('flight-planning:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('flight-planning:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('flight-planning:write'), controller.scheduleJob);
  router.put('/:id', authorize('flight-planning:write'), controller.update);
  router.post('/:id/archive', authorize('flight-planning:write'), controller.archive);
  router.post('/:id/restore', authorize('flight-planning:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('flight-planning:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('flight-planning:write'), controller.cancelJob);
  router.delete('/:id', authorize('flight-planning:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('flight-planning:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('flight-planning:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('flight-planning:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('flight-planning:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('flight-planning:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('flight-planning:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('flight-planning:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('flight-planning:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('flight-planning:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('flight-planning:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('flight-planning:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('flight-planning:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('flight-planning:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('flight-planning:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('flight-planning:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('flight-planning:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('flight-planning:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('flight-planning:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('flight-planning:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('flight-planning:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('flight-planning:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('flight-planning:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('flight-planning:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('flight-planning:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('flight-planning:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildFlightPlanningRouter };
