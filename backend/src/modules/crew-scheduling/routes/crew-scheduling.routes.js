/**
 * Aviation Operations Platform
 * Module: CrewScheduling
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createCrewSchedulingController } = require('../controllers/crew-scheduling.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildCrewSchedulingRouter(controller = createCrewSchedulingController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('crew-scheduling:read'), controller.list);
  router.get('/stats', authorize('crew-scheduling:read'), controller.getStatistics);
  router.get('/search', authorize('crew-scheduling:read'), controller.search);
  router.get('/export', authorize('crew-scheduling:export'), controller.export);
  router.get('/:id', authorize('crew-scheduling:read'), controller.getById);
  router.get('/:id/audit', authorize('crew-scheduling:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('crew-scheduling:read'), controller.getDependencies);
  router.post('/', authorize('crew-scheduling:write'), controller.create);
  router.post('/import', authorize('crew-scheduling:write'), controller.importBatch);
  router.post('/validate', authorize('crew-scheduling:write'), controller.validate);
  router.post('/bulk-status', authorize('crew-scheduling:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('crew-scheduling:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('crew-scheduling:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('crew-scheduling:write'), controller.scheduleJob);
  router.put('/:id', authorize('crew-scheduling:write'), controller.update);
  router.post('/:id/archive', authorize('crew-scheduling:write'), controller.archive);
  router.post('/:id/restore', authorize('crew-scheduling:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('crew-scheduling:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('crew-scheduling:write'), controller.cancelJob);
  router.delete('/:id', authorize('crew-scheduling:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('crew-scheduling:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('crew-scheduling:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('crew-scheduling:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('crew-scheduling:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('crew-scheduling:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('crew-scheduling:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('crew-scheduling:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('crew-scheduling:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('crew-scheduling:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('crew-scheduling:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('crew-scheduling:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('crew-scheduling:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('crew-scheduling:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('crew-scheduling:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('crew-scheduling:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('crew-scheduling:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('crew-scheduling:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('crew-scheduling:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('crew-scheduling:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('crew-scheduling:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('crew-scheduling:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('crew-scheduling:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('crew-scheduling:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('crew-scheduling:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('crew-scheduling:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildCrewSchedulingRouter };
