/**
 * Aviation Operations Platform
 * Module: Weather
 * Layer: backend/routes
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

const express = require('express');
const { createWeatherController } = require('../controllers/weather.controller');
const { authenticate, authorize } = require('../../middleware/auth');
const { rateLimit } = require('../../middleware/rateLimit');

function buildWeatherRouter(controller = createWeatherController()) {
  const router = express.Router();
  router.use(authenticate);
  router.use(rateLimit({ windowMs: 60000, max: 300 }));

  router.get('/', authorize('weather:read'), controller.list);
  router.get('/stats', authorize('weather:read'), controller.getStatistics);
  router.get('/search', authorize('weather:read'), controller.search);
  router.get('/export', authorize('weather:export'), controller.export);
  router.get('/:id', authorize('weather:read'), controller.getById);
  router.get('/:id/audit', authorize('weather:audit'), controller.getAuditTrail);
  router.get('/:id/dependencies', authorize('weather:read'), controller.getDependencies);
  router.post('/', authorize('weather:write'), controller.create);
  router.post('/import', authorize('weather:write'), controller.importBatch);
  router.post('/validate', authorize('weather:write'), controller.validate);
  router.post('/bulk-status', authorize('weather:write'), controller.bulkUpdateStatus);
  router.post('/:id/assign', authorize('weather:write'), controller.assignOwner);
  router.post('/:id/documents', authorize('weather:write'), controller.attachDocument);
  router.post('/:id/jobs', authorize('weather:write'), controller.scheduleJob);
  router.put('/:id', authorize('weather:write'), controller.update);
  router.post('/:id/archive', authorize('weather:write'), controller.archive);
  router.post('/:id/restore', authorize('weather:write'), controller.restore);
  router.delete('/:id/documents/:documentId', authorize('weather:write'), controller.detachDocument);
  router.delete('/:id/jobs/:jobId', authorize('weather:write'), controller.cancelJob);
  router.delete('/:id', authorize('weather:delete'), controller.remove);
  router.post('/ops/domain-1', authorize('weather:write'), controller.domainOperation1);
  router.post('/ops/domain-2', authorize('weather:write'), controller.domainOperation2);
  router.post('/ops/domain-3', authorize('weather:write'), controller.domainOperation3);
  router.post('/ops/domain-4', authorize('weather:write'), controller.domainOperation4);
  router.post('/ops/domain-5', authorize('weather:write'), controller.domainOperation5);
  router.post('/ops/domain-6', authorize('weather:write'), controller.domainOperation6);
  router.post('/ops/domain-7', authorize('weather:write'), controller.domainOperation7);
  router.post('/ops/domain-8', authorize('weather:write'), controller.domainOperation8);
  router.post('/ops/domain-9', authorize('weather:write'), controller.domainOperation9);
  router.post('/ops/domain-10', authorize('weather:write'), controller.domainOperation10);
  router.post('/ops/domain-11', authorize('weather:write'), controller.domainOperation11);
  router.post('/ops/domain-12', authorize('weather:write'), controller.domainOperation12);
  router.post('/ops/domain-13', authorize('weather:write'), controller.domainOperation13);
  router.post('/ops/domain-14', authorize('weather:write'), controller.domainOperation14);
  router.post('/ops/domain-15', authorize('weather:write'), controller.domainOperation15);
  router.post('/ops/domain-16', authorize('weather:write'), controller.domainOperation16);
  router.post('/ops/domain-17', authorize('weather:write'), controller.domainOperation17);
  router.post('/ops/domain-18', authorize('weather:write'), controller.domainOperation18);
  router.post('/ops/domain-19', authorize('weather:write'), controller.domainOperation19);
  router.post('/ops/domain-20', authorize('weather:write'), controller.domainOperation20);
  router.post('/ops/domain-21', authorize('weather:write'), controller.domainOperation21);
  router.post('/ops/domain-22', authorize('weather:write'), controller.domainOperation22);
  router.post('/ops/domain-23', authorize('weather:write'), controller.domainOperation23);
  router.post('/ops/domain-24', authorize('weather:write'), controller.domainOperation24);
  router.post('/ops/domain-25', authorize('weather:write'), controller.domainOperation25);

  return router;
}

module.exports = { buildWeatherRouter };
