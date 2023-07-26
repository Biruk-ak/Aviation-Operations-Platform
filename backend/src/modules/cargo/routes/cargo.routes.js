/**
 * Aviation Operations Platform
 * Module: Cargo
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createCargoController } = require('../controllers/cargo.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildCargoRouter(controller = createCargoController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('cargo:read'), controller.list);
  router.get('/stats', authorize('cargo:read'), controller.getStatistics);
  router.get('/search', authorize('cargo:read'), controller.search);
  router.get('/export', authorize('cargo:export'), controller.export);
  router.get('/:id', authorize('cargo:read'), controller.getById);
  router.get('/:id/audit', authorize('cargo:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('cargo:read'), controller.getDependencies);
  router.post('/', authorize('cargo:write'), controller.create);
  router.post('/import', authorize('cargo:write'), controller.importBatch);
  router.post('/validate', authorize('cargo:write'), controller.validate);
  router.post('/bulk-status', authorize('cargo:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('cargo:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('cargo:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('cargo:write'), controller.scheduleJob);
  router.put('/:id', authorize('cargo:write'), controller.update);
  router.post('/:id/archive', authorize('cargo:write'), controller.archive);
  router.post('/:id/restore', authorize('cargo:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('cargo:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('cargo:write'), controller.cancelJob);
  router.delete('/:id', authorize('cargo:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('cargo:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('cargo:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('cargo:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('cargo:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('cargo:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('cargo:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('cargo:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('cargo:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('cargo:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('cargo:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('cargo:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('cargo:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('cargo:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('cargo:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('cargo:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('cargo:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('cargo:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('cargo:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('cargo:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('cargo:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('cargo:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('cargo:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('cargo:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('cargo:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('cargo:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildCargoRouter };
