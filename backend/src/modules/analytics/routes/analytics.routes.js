/**
 * Aviation Operations Platform
 * Module: Analytics
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createAnalyticsController } = require('../controllers/analytics.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildAnalyticsRouter(controller = createAnalyticsController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('analytics:read'), controller.list);
  router.get('/stats', authorize('analytics:read'), controller.getStatistics);
  router.get('/search', authorize('analytics:read'), controller.search);
  router.get('/export', authorize('analytics:export'), controller.export);
  router.get('/:id', authorize('analytics:read'), controller.getById);
  router.get('/:id/audit', authorize('analytics:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('analytics:read'), controller.getDependencies);
  router.post('/', authorize('analytics:write'), controller.create);
  router.post('/import', authorize('analytics:write'), controller.importBatch);
  router.post('/validate', authorize('analytics:write'), controller.validate);
  router.post('/bulk-status', authorize('analytics:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('analytics:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('analytics:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('analytics:write'), controller.scheduleJob);
  router.put('/:id', authorize('analytics:write'), controller.update);
  router.post('/:id/archive', authorize('analytics:write'), controller.archive);
  router.post('/:id/restore', authorize('analytics:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('analytics:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('analytics:write'), controller.cancelJob);
  router.delete('/:id', authorize('analytics:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('analytics:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('analytics:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('analytics:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('analytics:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('analytics:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('analytics:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('analytics:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('analytics:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('analytics:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('analytics:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('analytics:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('analytics:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('analytics:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('analytics:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('analytics:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('analytics:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('analytics:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('analytics:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('analytics:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('analytics:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('analytics:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('analytics:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('analytics:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('analytics:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('analytics:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildAnalyticsRouter };
