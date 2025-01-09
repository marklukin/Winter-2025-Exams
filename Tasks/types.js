// Refactor following solution
// Count types in an array

//Step 3: add const to result,
// remove senseless lines

const types = (arr) => {
  const result = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (i of arr) {
    const t = typeof i;
    result[t]++;
  }
  return result;
};

module.exports = types;
