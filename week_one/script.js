'use strict';

const _ = require('lodash');

//never use 'var'
//const or let is preferred

//Ex. 1
console.log('Hello World, I\'m Node');

//Ex. 2
let output = 'Just testing nodemon, using lodash.';
console.log(output);
output = _.camelCase(output);
console.log(output);
