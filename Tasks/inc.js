// Refactor following solution
// Increment all numbers in dictionary

// Step 3: convert for..in to for..of

'use strict';

let incNumbers = (dict) => {
  for (const numbers of Object.keys(dict)) {
    if ((typeof dict[numbers]).charAt(0).toUpperCase() === 'N') {
      dict[numbers] = dict[numbers] + 1;
    }
  }
  return dict;
};

module.exports = incNumbers;
