// Sum of Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersIndex = 0;
let sum = 0;
do {
  sum += numbers[numbersIndex];
  ++numbersIndex;
} while (numbersIndex < numbers.length);
console.log(`The array = ${numbers} \nSUM = ${sum}\n------------------`);

// Add it Up
let num = 1;
let result = 0;
do {
  result = (num * (num + 1)) / 2;
  ++num;
} while (num <= 20);
console.log(`The result = ${result}\n-----------------`);

// Capitalize
let names = ["haTEM", "lubna", "adam", "adeeb", "samerra"];
let newModifiedArray = [];
let namesIndex = 0;
do {
  newModifiedArray.push(
    names[namesIndex][0].toUpperCase() +
      names[namesIndex].toLowerCase().substring(1)
  );
  ++namesIndex;
} while (namesIndex < names.length);

console.log(` The names array = ${names}`);
console.log(
  `The newModifiedArray = ${newModifiedArray}\n-----------------------`
);

// No Duplicates
let arrayOfNumbers = [1, 4, 4, 7, 7, 7];
let index = 0;
arrayOfNumbers.sort(function(a, b) {
  return a - b;
});
console.log(`The array with duplicates = ${arrayOfNumbers}`);
do {
  if (arrayOfNumbers[index - 1] === arrayOfNumbers[index]) {
    arrayOfNumbers.splice(index, 1);
  } else {
    ++index;
  }
} while (index < arrayOfNumbers.length);
console.log(
  `The array with no duplicates = ${arrayOfNumbers}\n---------------`
);

// Repeat it

let howManyRepeats = 1;
let repeatedArray = [];
repeats = (item, times) => {
  do {
    repeatedArray.push(item);
    ++howManyRepeats;
  } while (howManyRepeats <= times);
  return `The repeatedArray = ${repeatedArray} \n---------------`;
};
console.log(repeats("Hatem", 5));

// Factors

factor = arr => {
  let isFactor = true;
  let index = 0;
  while (index < arr.length - 1) {
    let currentElement = arr[index];
    let nextElement = arr[index + 1];
    isFactor = nextElement % currentElement === 0;
    ++index;
  }
  return isFactor;
};
let arr = [2, 4, 6, 7, 12];
let arr1 = [1, 2, 4, 8, 16, 32];
console.log(`arr = ${arr}`);
console.log(`arr1 = ${arr1}`);
console.log(`isFactor for arr = ${factor(arr)}`);
console.log(`isFactor for arr1 = ${factor(arr1)}`);
