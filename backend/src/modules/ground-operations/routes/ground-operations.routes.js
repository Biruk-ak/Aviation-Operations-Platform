/**
 * Aviation Operations Platform
 * Module: GroundOperations
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createGroundOperationsController } = require('../controllers/ground-operations.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildGroundOperationsRouter(controller = createGroundOperationsController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('ground-operations:read'), controller.list);
  router.get('/stats', authorize('ground-operations:read'), controller.getStatistics);
  router.get('/search', authorize('ground-operations:read'), controller.search);
  router.get('/export', authorize('ground-operations:export'), controller.export);
  router.get('/:id', authorize('ground-operations:read'), controller.getById);
  router.get('/:id/audit', authorize('ground-operations:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('ground-operations:read'), controller.getDependencies);
  router.post('/', authorize('ground-operations:write'), controller.create);
  router.post('/import', authorize('ground-operations:write'), controller.importBatch);
  router.post('/validate', authorize('ground-operations:write'), controller.validate);
  router.post('/bulk-status', authorize('ground-operations:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('ground-operations:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('ground-operations:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('ground-operations:write'), controller.scheduleJob);
  router.put('/:id', authorize('ground-operations:write'), controller.update);
  router.post('/:id/archive', authorize('ground-operations:write'), controller.archive);
  router.post('/:id/restore', authorize('ground-operations:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('ground-operations:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('ground-operations:write'), controller.cancelJob);
  router.delete('/:id', authorize('ground-operations:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('ground-operations:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('ground-operations:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('ground-operations:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('ground-operations:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('ground-operations:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('ground-operations:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('ground-operations:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('ground-operations:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('ground-operations:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('ground-operations:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('ground-operations:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('ground-operations:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('ground-operations:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('ground-operations:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('ground-operations:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('ground-operations:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('ground-operations:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('ground-operations:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('ground-operations:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('ground-operations:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('ground-operations:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('ground-operations:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('ground-operations:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('ground-operations:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('ground-operations:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildGroundOperationsRouter };
