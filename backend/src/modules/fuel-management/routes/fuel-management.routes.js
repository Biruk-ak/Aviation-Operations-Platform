/**
 * Aviation Operations Platform
 * Module: FuelManagement
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createFuelManagementController } = require('../controllers/fuel-management.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildFuelManagementRouter(controller = createFuelManagementController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('fuel-management:read'), controller.list);
  router.get('/stats', authorize('fuel-management:read'), controller.getStatistics);
  router.get('/search', authorize('fuel-management:read'), controller.search);
  router.get('/export', authorize('fuel-management:export'), controller.export);
  router.get('/:id', authorize('fuel-management:read'), controller.getById);
  router.get('/:id/audit', authorize('fuel-management:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('fuel-management:read'), controller.getDependencies);
  router.post('/', authorize('fuel-management:write'), controller.create);
  router.post('/import', authorize('fuel-management:write'), controller.importBatch);
  router.post('/validate', authorize('fuel-management:write'), controller.validate);
  router.post('/bulk-status', authorize('fuel-management:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('fuel-management:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('fuel-management:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('fuel-management:write'), controller.scheduleJob);
  router.put('/:id', authorize('fuel-management:write'), controller.update);
  router.post('/:id/archive', authorize('fuel-management:write'), controller.archive);
  router.post('/:id/restore', authorize('fuel-management:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('fuel-management:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('fuel-management:write'), controller.cancelJob);
  router.delete('/:id', authorize('fuel-management:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('fuel-management:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('fuel-management:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('fuel-management:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('fuel-management:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('fuel-management:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('fuel-management:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('fuel-management:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('fuel-management:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('fuel-management:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('fuel-management:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('fuel-management:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('fuel-management:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('fuel-management:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('fuel-management:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('fuel-management:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('fuel-management:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('fuel-management:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('fuel-management:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('fuel-management:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('fuel-management:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('fuel-management:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('fuel-management:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('fuel-management:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('fuel-management:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('fuel-management:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildFuelManagementRouter };
