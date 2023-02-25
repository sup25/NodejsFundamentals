//if there is only 1 module
//const add = require('./oper')
//console.log(add(5, 5))

// const oper = require('./oper')
//if ther is 2 module
// console.log(oper.add(5, 5))
// console.log(oper.sub(10, 5))

// if there is more than 2, or to make code clean, destructure the object
const { add, sub } = require('./oper')
console.log(add(5, 5))
console.log(sub(10, 5))