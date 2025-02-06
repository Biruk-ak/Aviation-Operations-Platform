/**
 * Aviation Operations Platform
 * Module: Ticketing
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createTicketingController } = require('../controllers/ticketing.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildTicketingRouter(controller = createTicketingController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('ticketing:read'), controller.list);
  router.get('/stats', authorize('ticketing:read'), controller.getStatistics);
  router.get('/search', authorize('ticketing:read'), controller.search);
  router.get('/export', authorize('ticketing:export'), controller.export);
  router.get('/:id', authorize('ticketing:read'), controller.getById);
  router.get('/:id/audit', authorize('ticketing:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('ticketing:read'), controller.getDependencies);
  router.post('/', authorize('ticketing:write'), controller.create);
  router.post('/import', authorize('ticketing:write'), controller.importBatch);
  router.post('/validate', authorize('ticketing:write'), controller.validate);
  router.post('/bulk-status', authorize('ticketing:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('ticketing:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('ticketing:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('ticketing:write'), controller.scheduleJob);
  router.put('/:id', authorize('ticketing:write'), controller.update);
  router.post('/:id/archive', authorize('ticketing:write'), controller.archive);
  router.post('/:id/restore', authorize('ticketing:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('ticketing:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('ticketing:write'), controller.cancelJob);
  router.delete('/:id', authorize('ticketing:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('ticketing:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('ticketing:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('ticketing:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('ticketing:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('ticketing:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('ticketing:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('ticketing:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('ticketing:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('ticketing:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('ticketing:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('ticketing:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('ticketing:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('ticketing:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('ticketing:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('ticketing:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('ticketing:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('ticketing:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('ticketing:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('ticketing:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('ticketing:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('ticketing:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('ticketing:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('ticketing:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('ticketing:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('ticketing:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildTicketingRouter };
