// Refactor following solution
// Sum all numbers from an array

//Step 2: remove senseless lines

'use strict';

const sum = (arr) => {
  for (i of arr) {
    let t = typeof i;
    if (t === 'number') {
      if (sum.length > 0) {
        const new_Sum = sum[sum.length - 1] + i;
        sum.push(new_Sum);
      }
    }
  }
  return sum[sum.length - 1];
};

module.exports = sum;
