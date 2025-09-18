/**
 * Aviation Operations Platform
 * Module: MobileApps
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createMobileAppsController } = require('../controllers/mobile-apps.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildMobileAppsRouter(controller = createMobileAppsController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('mobile-apps:read'), controller.list);
  router.get('/stats', authorize('mobile-apps:read'), controller.getStatistics);
  router.get('/search', authorize('mobile-apps:read'), controller.search);
  router.get('/export', authorize('mobile-apps:export'), controller.export);
  router.get('/:id', authorize('mobile-apps:read'), controller.getById);
  router.get('/:id/audit', authorize('mobile-apps:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('mobile-apps:read'), controller.getDependencies);
  router.post('/', authorize('mobile-apps:write'), controller.create);
  router.post('/import', authorize('mobile-apps:write'), controller.importBatch);
  router.post('/validate', authorize('mobile-apps:write'), controller.validate);
  router.post('/bulk-status', authorize('mobile-apps:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('mobile-apps:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('mobile-apps:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('mobile-apps:write'), controller.scheduleJob);
  router.put('/:id', authorize('mobile-apps:write'), controller.update);
  router.post('/:id/archive', authorize('mobile-apps:write'), controller.archive);
  router.post('/:id/restore', authorize('mobile-apps:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('mobile-apps:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('mobile-apps:write'), controller.cancelJob);
  router.delete('/:id', authorize('mobile-apps:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('mobile-apps:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('mobile-apps:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('mobile-apps:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('mobile-apps:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('mobile-apps:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('mobile-apps:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('mobile-apps:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('mobile-apps:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('mobile-apps:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('mobile-apps:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('mobile-apps:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('mobile-apps:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('mobile-apps:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('mobile-apps:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('mobile-apps:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('mobile-apps:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('mobile-apps:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('mobile-apps:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('mobile-apps:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('mobile-apps:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('mobile-apps:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('mobile-apps:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('mobile-apps:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('mobile-apps:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('mobile-apps:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildMobileAppsRouter };
