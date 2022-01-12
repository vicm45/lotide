const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArray = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const middle = function(array) {
  let midArray = [];
  if (array.length < 3) {
    return midArray;
  } else if (array.length % 2 === 0) {
    midArray.push(array[array.length / 2] - 1);
    midArray.push(array[array.length / 2]);
  } else {
    midArray.push(array[(array.length - 1) / 2]);
  }
  return midArray;
};
assertArray(middle([1, 2]), []);
assertArray(middle([1, 2, 3]), [2]);