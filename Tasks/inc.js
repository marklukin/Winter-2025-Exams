// Refactor following solution
// Increment all numbers in dictionary

// Step 4: simplify if-statement, change let to const

'use strict';

const incNumbers = (dict) => {
  for (const numbers of Object.keys(dict)) {
    if (typeof dict[numbers] === 'number') {
      dict[numbers]++;
    }
  }
  return dict;
};

module.exports = incNumbers;
