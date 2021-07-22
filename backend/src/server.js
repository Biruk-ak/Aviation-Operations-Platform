'use strict';

const { createApp } = require('./app');

const port = Number(process.env.PORT || 4000);
const app = createApp();

if (require.main === module) {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Aviation Operations Platform API listening on :${port}`);
  });
}

module.exports = { app, port };
