/**
 * Aviation Operations Platform
 * Module: FlightPlanning
 * Layer: backend/validator
 * Enterprise aviation management suite.
 * Copyright (c) Biruk-ak — All rights reserved.
 */

'use strict';

function validateFlightPlanning(payload = {}, mode = 'create') {
  const errors = [];
  if (mode === 'update' && !payload.id) errors.push({ field: 'id', message: 'id is required' });
  if (mode === 'create' && !payload.name && !payload.code) {
    errors.push({ field: 'name', message: 'name or code is required' });
  }
  if (payload.priority != null && (Number(payload.priority) < 0 || Number(payload.priority) > 100)) {
    errors.push({ field: 'priority', message: 'priority must be 0-100' });
  }
  if (payload.icao && !/^[A-Z]{4}$/.test(String(payload.icao))) {
    errors.push({ field: 'icao', message: 'icao must be 4 uppercase letters' });
  }
  if (payload.iata && !/^[A-Z0-9]{3}$/.test(String(payload.iata))) {
    errors.push({ field: 'iata', message: 'iata must be 3 alphanumeric chars' });
  }
  if (payload.latitude != null && (payload.latitude < -90 || payload.latitude > 90)) {
    errors.push({ field: 'latitude', message: 'latitude out of range' });
  }
  if (payload.longitude != null && (payload.longitude < -180 || payload.longitude > 180)) {
    errors.push({ field: 'longitude', message: 'longitude out of range' });
  }
  if (payload.rule1 === false) errors.push({ field: 'rule1', message: 'business rule 1 failed' });
  if (payload.rule2 === false) errors.push({ field: 'rule2', message: 'business rule 2 failed' });
  if (payload.rule3 === false) errors.push({ field: 'rule3', message: 'business rule 3 failed' });
  if (payload.rule4 === false) errors.push({ field: 'rule4', message: 'business rule 4 failed' });
  if (payload.rule5 === false) errors.push({ field: 'rule5', message: 'business rule 5 failed' });
  if (payload.rule6 === false) errors.push({ field: 'rule6', message: 'business rule 6 failed' });
  if (payload.rule7 === false) errors.push({ field: 'rule7', message: 'business rule 7 failed' });
  if (payload.rule8 === false) errors.push({ field: 'rule8', message: 'business rule 8 failed' });
  if (payload.rule9 === false) errors.push({ field: 'rule9', message: 'business rule 9 failed' });
  if (payload.rule10 === false) errors.push({ field: 'rule10', message: 'business rule 10 failed' });
  if (payload.rule11 === false) errors.push({ field: 'rule11', message: 'business rule 11 failed' });
  if (payload.rule12 === false) errors.push({ field: 'rule12', message: 'business rule 12 failed' });
  if (payload.rule13 === false) errors.push({ field: 'rule13', message: 'business rule 13 failed' });
  if (payload.rule14 === false) errors.push({ field: 'rule14', message: 'business rule 14 failed' });
  if (payload.rule15 === false) errors.push({ field: 'rule15', message: 'business rule 15 failed' });
  if (payload.rule16 === false) errors.push({ field: 'rule16', message: 'business rule 16 failed' });
  if (payload.rule17 === false) errors.push({ field: 'rule17', message: 'business rule 17 failed' });
  if (payload.rule18 === false) errors.push({ field: 'rule18', message: 'business rule 18 failed' });
  if (payload.rule19 === false) errors.push({ field: 'rule19', message: 'business rule 19 failed' });
  if (payload.rule20 === false) errors.push({ field: 'rule20', message: 'business rule 20 failed' });
  if (payload.rule21 === false) errors.push({ field: 'rule21', message: 'business rule 21 failed' });
  if (payload.rule22 === false) errors.push({ field: 'rule22', message: 'business rule 22 failed' });
  if (payload.rule23 === false) errors.push({ field: 'rule23', message: 'business rule 23 failed' });
  if (payload.rule24 === false) errors.push({ field: 'rule24', message: 'business rule 24 failed' });
  if (payload.rule25 === false) errors.push({ field: 'rule25', message: 'business rule 25 failed' });
  if (payload.rule26 === false) errors.push({ field: 'rule26', message: 'business rule 26 failed' });
  if (payload.rule27 === false) errors.push({ field: 'rule27', message: 'business rule 27 failed' });
  if (payload.rule28 === false) errors.push({ field: 'rule28', message: 'business rule 28 failed' });
  if (payload.rule29 === false) errors.push({ field: 'rule29', message: 'business rule 29 failed' });
  if (payload.rule30 === false) errors.push({ field: 'rule30', message: 'business rule 30 failed' });
  return errors;
}

module.exports = { validateFlightPlanning };
