/**
 * Aviation Operations Platform
 * Module: AirportDashboard
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createAirportDashboardController } = require('../controllers/airport-dashboard.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildAirportDashboardRouter(controller = createAirportDashboardController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('airport-dashboard:read'), controller.list);
  router.get('/stats', authorize('airport-dashboard:read'), controller.getStatistics);
  router.get('/search', authorize('airport-dashboard:read'), controller.search);
  router.get('/export', authorize('airport-dashboard:export'), controller.export);
  router.get('/:id', authorize('airport-dashboard:read'), controller.getById);
  router.get('/:id/audit', authorize('airport-dashboard:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('airport-dashboard:read'), controller.getDependencies);
  router.post('/', authorize('airport-dashboard:write'), controller.create);
  router.post('/import', authorize('airport-dashboard:write'), controller.importBatch);
  router.post('/validate', authorize('airport-dashboard:write'), controller.validate);
  router.post('/bulk-status', authorize('airport-dashboard:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('airport-dashboard:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('airport-dashboard:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('airport-dashboard:write'), controller.scheduleJob);
  router.put('/:id', authorize('airport-dashboard:write'), controller.update);
  router.post('/:id/archive', authorize('airport-dashboard:write'), controller.archive);
  router.post('/:id/restore', authorize('airport-dashboard:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('airport-dashboard:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('airport-dashboard:write'), controller.cancelJob);
  router.delete('/:id', authorize('airport-dashboard:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('airport-dashboard:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('airport-dashboard:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('airport-dashboard:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('airport-dashboard:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('airport-dashboard:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('airport-dashboard:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('airport-dashboard:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('airport-dashboard:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('airport-dashboard:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('airport-dashboard:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('airport-dashboard:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('airport-dashboard:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('airport-dashboard:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('airport-dashboard:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('airport-dashboard:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('airport-dashboard:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('airport-dashboard:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('airport-dashboard:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('airport-dashboard:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('airport-dashboard:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('airport-dashboard:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('airport-dashboard:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('airport-dashboard:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('airport-dashboard:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('airport-dashboard:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildAirportDashboardRouter };
