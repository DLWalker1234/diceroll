// The math file should export an Object with a method called randomInt that accepts two arguments, a lower bound and an upper bound. This function should return a random integer 
// inclusive of the lower bound and the upper bound.
console.log('math');

const randomInt = require('math.js');

randomInt = (sides, count) => {
    let min = 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = { randomInt };

// console.log("###", randomInt(1, 10));