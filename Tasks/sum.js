// Refactor following solution
// Sum all numbers from an array

//Step 4: optimise the loop

'use strict';

const sum = (arr) => {
  let result = 0;
  for (const key of arr) {
    if (typeof key === 'number') {
      result += key;
    }
  }
  return result;
};

module.exports = sum;
