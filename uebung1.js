let hund = {
  art: "Hund",
  gewicht: 30,
  rasse: "Schäferhund",
  name: "Peter",
};

let meinArray = [10, 20, 30, 13, 50, 60, 5];

// 1
const add = (x, y) => x + y;
const sum = add(1, 2);
console.log(sum);

// 2
const returnParamsAsArray = (...params) => params;
console.log(returnParamsAsArray(1, 5, "test"));

// 3
const manipulateArray = (array, useAdd, steps) => {
  let sum = array[0];
  for (let i = steps; i < array.length; i += steps) {
    useAdd ? (sum += array[i]) : (sum -= array[i]);
  }
  return sum;
};
console.log(manipulateArray(meinArray, true, 2));

// 4
const manipulateDog = (dog, modifiedDog) => ({ ...dog, ...modifiedDog });
console.log(manipulateDog(hund, { gewicht: 20, name: "Pit", hasOwner: true }));

// 5
const getSmallerNumber = (x, y) => (x < y ? x : y);
const getSmallestNumber = (numbers, getSmallerNumber) =>
  numbers.reduce(getSmallerNumber);
console.log(getSmallestNumber(meinArray, getSmallerNumber));
