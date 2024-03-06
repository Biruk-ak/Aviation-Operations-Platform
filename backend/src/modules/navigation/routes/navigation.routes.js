/**
 * Aviation Operations Platform
 * Module: Navigation
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createNavigationController } = require('../controllers/navigation.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildNavigationRouter(controller = createNavigationController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('navigation:read'), controller.list);
  router.get('/stats', authorize('navigation:read'), controller.getStatistics);
  router.get('/search', authorize('navigation:read'), controller.search);
  router.get('/export', authorize('navigation:export'), controller.export);
  router.get('/:id', authorize('navigation:read'), controller.getById);
  router.get('/:id/audit', authorize('navigation:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('navigation:read'), controller.getDependencies);
  router.post('/', authorize('navigation:write'), controller.create);
  router.post('/import', authorize('navigation:write'), controller.importBatch);
  router.post('/validate', authorize('navigation:write'), controller.validate);
  router.post('/bulk-status', authorize('navigation:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('navigation:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('navigation:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('navigation:write'), controller.scheduleJob);
  router.put('/:id', authorize('navigation:write'), controller.update);
  router.post('/:id/archive', authorize('navigation:write'), controller.archive);
  router.post('/:id/restore', authorize('navigation:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('navigation:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('navigation:write'), controller.cancelJob);
  router.delete('/:id', authorize('navigation:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('navigation:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('navigation:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('navigation:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('navigation:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('navigation:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('navigation:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('navigation:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('navigation:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('navigation:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('navigation:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('navigation:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('navigation:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('navigation:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('navigation:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('navigation:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('navigation:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('navigation:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('navigation:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('navigation:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('navigation:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('navigation:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('navigation:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('navigation:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('navigation:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('navigation:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildNavigationRouter };
