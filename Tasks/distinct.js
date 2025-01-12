// Refactor following solution
// Return an array without duplicates

// Step 3: instead of creating new Set, create container result and check of each element 
// of array already exists in result

'use strict';

const distinct = (array) => {
  const result = [];
  for (const element of array) {
    if (!result.includes(element)) result.push(element);
  }
  return result;
};

module.exports = distinct;
