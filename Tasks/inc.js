// Refactor following solution
// Increment all numbers in dictionary

// Step 2: delete useless parameter, add const to the loop and rename identifiers

'use strict';

let incNumbers = (dict) => {
  for (const numbers in dict) {
    if ((typeof dict[numbers]).charAt(0).toUpperCase() === 'N') {
      dict[numbers] = dict[numbers] + 1;
    }
  }
  return dict;
};

module.exports = incNumbers;
