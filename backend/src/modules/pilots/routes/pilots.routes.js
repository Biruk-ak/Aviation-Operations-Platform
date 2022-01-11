/**
 * Aviation Operations Platform
 * Module: Pilots
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createPilotsController } = require('../controllers/pilots.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildPilotsRouter(controller = createPilotsController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('pilots:read'), controller.list);
  router.get('/stats', authorize('pilots:read'), controller.getStatistics);
  router.get('/search', authorize('pilots:read'), controller.search);
  router.get('/export', authorize('pilots:export'), controller.export);
  router.get('/:id', authorize('pilots:read'), controller.getById);
  router.get('/:id/audit', authorize('pilots:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('pilots:read'), controller.getDependencies);
  router.post('/', authorize('pilots:write'), controller.create);
  router.post('/import', authorize('pilots:write'), controller.importBatch);
  router.post('/validate', authorize('pilots:write'), controller.validate);
  router.post('/bulk-status', authorize('pilots:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('pilots:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('pilots:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('pilots:write'), controller.scheduleJob);
  router.put('/:id', authorize('pilots:write'), controller.update);
  router.post('/:id/archive', authorize('pilots:write'), controller.archive);
  router.post('/:id/restore', authorize('pilots:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('pilots:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('pilots:write'), controller.cancelJob);
  router.delete('/:id', authorize('pilots:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('pilots:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('pilots:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('pilots:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('pilots:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('pilots:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('pilots:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('pilots:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('pilots:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('pilots:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('pilots:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('pilots:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('pilots:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('pilots:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('pilots:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('pilots:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('pilots:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('pilots:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('pilots:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('pilots:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('pilots:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('pilots:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('pilots:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('pilots:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('pilots:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('pilots:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildPilotsRouter };
