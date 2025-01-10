// Refactor following solution
// Reverse dict, exchange keys and values

// Step 3: create container result, instead of adding 
// and deleting keys during iteration

'use strict';

const reverse = (dict) => {
  const result = {};
  for (const key of Object.keys(dict)) {
    const value = dict[key];
    result[value] = key;
  }
  return result;
};

module.exports = reverse;
