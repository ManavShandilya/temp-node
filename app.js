// require: we use this function to import the module exports....

const names = require("./names");

const sayHi = require("./utils"); // importing it...

const data = require('./alternative-method');
console.log(names);

console.log(data);



sayHi('susan');
sayHi(names.john);
sayHi(names.peter);