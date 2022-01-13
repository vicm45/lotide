const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(allLetters) {
  let result = {};
  for (let letter of allLetters) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

const result1 = countLetters("lighthouse in the house", {"l": true, "s": true, "e": false});

//{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
assertEqual(result1["l"], 1);
assertEqual(result1["s"], 3);