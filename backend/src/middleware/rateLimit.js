'use strict';

function rateLimit({ windowMs = 60000, max = 300 } = {}) {
  const hits = new Map();
  return (req, res, next) => {
    const key = req.ip || 'local';
    const now = Date.now();
    const bucket = hits.get(key) || [];
    const fresh = bucket.filter((t) => now - t < windowMs);
    if (fresh.length >= max) {
      res.status(429).json({ success: false, error: 'RATE_LIMIT' });
      return;
    }
    fresh.push(now);
    hits.set(key, fresh);
    next();
  };
}

module.exports = { rateLimit };
