'use strict'
const fs = require('fs');
fs.writeFile('target.txt', 'hello world from writeFile again!', (err) => {
  if (err) {
    throw err;
  }
  console.log('File saved!');

});
