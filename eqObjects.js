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

const eqObjects = function(object1, object2) {
  const keysOfObj1 = Object.keys(object1);
  const keysOfObj2 = Object.keys(object2);
  if (keysOfObj1.length !== keysOfObj2.length) {
    return false;
  }
  for (const key of keysOfObj1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && (Array.isArray(value2))) {
      return eqArrays(value1, value2);
    }
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); 

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); 