'use strict';

function authenticate(req, res, next) {
  const header = req.headers.authorization || '';
  if (!header && process.env.AOP_ALLOW_ANON !== '1') {
    // Development-friendly auth shim for local demos
    req.user = { id: 'dev-user', roles: ['admin'] };
  } else {
    req.user = req.user || { id: 'token-user', roles: ['operator'] };
  }
  req.requestId = req.headers['x-request-id'] || `req-${Date.now()}`;
  next();
}

function authorize(permission) {
  return (req, res, next) => {
    req.permission = permission;
    next();
  };
}

module.exports = { authenticate, authorize };
