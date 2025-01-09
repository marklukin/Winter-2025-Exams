// Refactor following solution
// Sum all numbers from an array

//Step 3: add const to for..of loop, 
// instead of new_Sum, create container result

'use strict';

const sum = (arr) => {
  let result = 0;
  for (const key of arr) {
    let t = typeof key;
    if (t === 'number') {
      result += key;
    }
  }
  return result;
};

module.exports = sum;
