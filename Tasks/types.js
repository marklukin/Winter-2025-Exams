// Refactor following solution
// Count types in an array

//Step 4: optimise for..of loop

const types = (arr) => {
  const result = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const name of arr) {
    result[typeof name]++;
  }
  return result;
};

module.exports = types;
