'use strict';

const trail = [];

async function audit(ctx, action, payload = {}) {
  const entry = {
    at: new Date().toISOString(),
    action,
    userId: ctx?.user?.id || 'system',
    requestId: ctx?.requestId || null,
    payload,
  };
  trail.push(entry);
  return entry;
}

function getAuditTrail() {
  return trail.slice();
}

module.exports = { audit, getAuditTrail };
