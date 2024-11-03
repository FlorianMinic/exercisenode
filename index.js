// index.js
require('dotenv').config();
const cowsay = require('cowsay');

const message = process.env.MESSAGE || 'Default message';

console.log(cowsay.say({
    text: message,
    e: 'oO',
    T: 'U '
}));
