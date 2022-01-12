const without = function(arr1, arr2) {
  let newArray = [];
  let numberMatch = false;

  // Go through first array
  for (let i = 0; i < arr1.length; i++) {
    // set numberMatch flag to false
    numberMatch = false;
    // go through the second array
    for (let j = 0; j < arr2.length; j++) {
      // check if value in arr1 matches arr2
      if (arr1[i] === arr2[j])
        // if it matches set flag to true
        numberMatch = true;
    }
    // if the flag was still false at the end then push value of arr1 to newarray
    if (numberMatch === false) {
      newArray.push(arr1[i]);
    }
  }
          
    
  return newArray;
};

const assertArray = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
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

assertArray(without([1, 2, 3], [1]), [2, 3]);