// Refactor following solution
// Return an array without duplicates

// Step 1: add 'use strict', follow naming and coding conventions

'use strict';

const distinct = (array) => {
  const A = new Set();
  let w = 0;
  array.forEach((a) => {
    if (A.has(a)) {
      delete array[w];
    } else {
      A.add(a);
    }
    w++;
  });
  return array.filter
  (x => typeof x === 'number');
};

module.exports = distinct;
