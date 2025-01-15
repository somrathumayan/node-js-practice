const _ = require('lodash')

console.log(_.last([1,2,3]))  
// to read last digit 

console.log(__dirname) // directory name
console.log(__filename) // file name


const man = require("./server");
console.log(man);

// Players called in server.js file and export it. 
// here, import and console.log...