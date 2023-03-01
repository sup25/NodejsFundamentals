//using npm modules
// import chalk from 'chalk';
// console.log(chalk.blue.inverse('Hello World'));


import chalk from 'chalk';
import validator from 'validator';
const res = validator.isEmail('foo@bar.com'); //=> true
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))