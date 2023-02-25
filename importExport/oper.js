//build your own module
const add = (a, b) => {
    return a + b;
}
// module.exports = add; 
const sub = (a, b) => {
    return a - b;
}

//to export 2 module 
// module.exports.add = add;
// module.exports.sub = sub;

//to make code clean use object destructure
module.exports = { add, sub }

