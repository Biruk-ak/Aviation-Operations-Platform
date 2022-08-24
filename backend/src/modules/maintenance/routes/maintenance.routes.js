/**
 * Aviation Operations Platform
 * Module: Maintenance
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createMaintenanceController } = require('../controllers/maintenance.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildMaintenanceRouter(controller = createMaintenanceController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('maintenance:read'), controller.list);
  router.get('/stats', authorize('maintenance:read'), controller.getStatistics);
  router.get('/search', authorize('maintenance:read'), controller.search);
  router.get('/export', authorize('maintenance:export'), controller.export);
  router.get('/:id', authorize('maintenance:read'), controller.getById);
  router.get('/:id/audit', authorize('maintenance:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('maintenance:read'), controller.getDependencies);
  router.post('/', authorize('maintenance:write'), controller.create);
  router.post('/import', authorize('maintenance:write'), controller.importBatch);
  router.post('/validate', authorize('maintenance:write'), controller.validate);
  router.post('/bulk-status', authorize('maintenance:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('maintenance:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('maintenance:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('maintenance:write'), controller.scheduleJob);
  router.put('/:id', authorize('maintenance:write'), controller.update);
  router.post('/:id/archive', authorize('maintenance:write'), controller.archive);
  router.post('/:id/restore', authorize('maintenance:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('maintenance:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('maintenance:write'), controller.cancelJob);
  router.delete('/:id', authorize('maintenance:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('maintenance:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('maintenance:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('maintenance:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('maintenance:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('maintenance:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('maintenance:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('maintenance:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('maintenance:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('maintenance:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('maintenance:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('maintenance:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('maintenance:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('maintenance:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('maintenance:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('maintenance:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('maintenance:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('maintenance:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('maintenance:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('maintenance:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('maintenance:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('maintenance:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('maintenance:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('maintenance:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('maintenance:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('maintenance:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildMaintenanceRouter };
