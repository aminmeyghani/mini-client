#!/usr/bin/env node
const path = require('path');
const {run, str} = require('../lib/common');
const currently = path.join('./node_modules/.bin/concurrently');

const dev = str(
  currently,
  `"node ${path.join(`./tasks/dev/watch-css.js`)}"`,
  `"node ${path.join(`./tasks/dev/dev-server.js`)}"`
);
run(dev, `Couldn't start the dev server.`);
