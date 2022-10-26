'use strict';

const _ = require('lodash');

//never use 'var'
//const or let is preferred

//Ex. 1
console.log('Hello World!');

//Ex. 2
let output = 'just testing';
console.log(output);
output = _.camelCase(output);
console.log(output);
