#!/usr/bin/env node
'use strict';
require('fs').createReadStream(process.argv[2])
  .on('data', chunk => process.stdout.write(`${chunk}\n`))
  .on('error', err => process.stderr.write(`ERROR: ${err.message}\n`))
