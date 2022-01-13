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

  
const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      let letter = sentence[i];
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
      
    }

  }
  // console.log
  return results;
};

let result1 = letterPositions("hello");
assertArray(result1["l"], [2,3]);
