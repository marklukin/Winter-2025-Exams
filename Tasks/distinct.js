// Refactor following solution
// Return an array without duplicates

// Step 2: use for..of instead of forEach

'use strict';

const distinct = (array) => {
  const A = new Set();
  let w = 0;
  for (const element of array) {
    if (A.has(element)) {
      delete array[w];
    } else {
      A.add(element);
    }
    w++;
  }
  return array.filter
  (x => typeof x === 'number');
};

module.exports = distinct;
