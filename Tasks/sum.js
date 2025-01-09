// Refactor following solution
// Sum all numbers from an array

//Step 1: add 'use strict', 
// fix the formatting of the main function

'use strict';

const sum = (arr) => {
  sum = [0];
  let k = 5;
  for (i of arr) {
    let t = typeof i;
    if (t === 'number') {
      if (sum.length > 0) {
        const new_Sum = sum[sum.length - 1] + i;
        sum.push(new_Sum);
      }
    }
  }
  sum[0];
  return sum[sum.length - 1];
  sum.push(sum.length - 1);
};

module.exports = sum;
