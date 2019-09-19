const addition = () => {
  let sum = 0;
  console.log(`Exercise 1 :\n`);
  for (let i = 1; i <= 20; i++) {
    sum += i;
    console.log(`i = ${i} ===> Sum = ${sum}\n`);
  }
};
addition();
const bottles = () => {
  let arr = ["one", "two", "three", "four", "five"];
  console.log(`----------------\nExercise 2 :\n`);
  for (let i = 0; i < arr.length; i++) {
    console.log(`There is ${arr[i]} bottle of beer on the wall\n`);
  }
};
bottles();
const isEven = () => {
  console.log(`----------------\nExercise 3 :\n`);
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even\n`);
    } else {
      console.log(`${i} is odd\n`);
    }
  }
};
isEven();
const multiplication = () => {
  let result = 0;
  console.log(`----------------\nExercise 4 without bonus :\n`);
  for (i = 0; i <= 10; i++) {
    result = i * 9;
    console.log(`i = ${i} ===> ${i} * 9 = ${result}\n`);
  }
};
multiplication();
const multiplicationWithBonus = () => {
  let result = 0;
  console.log(`----------------\nExercise 4 with bonus :\n`);
  for (i = 0; i <= 10; i++) {
    for (j = 0; j <= 10; j++) {
      result = i * j;
      console.log(`i = ${i} && j = ${j}`);
      console.log(`${i} * ${j} = ${result}\n`);
    }
  }
};
multiplicationWithBonus();
const grades = () => {
  let average = 0;
  let sum = 0;
  let marks = [90, 60, 77, 81, 65];
  console.log(`----------------\nExercise 5 :\n`);
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  average = sum / marks.length;
  console.log(
    `Marks are : ${marks}\nThe sum of marks = ${sum}\nThe average of marks = ${average}\n`
  );
};
grades();
const fizzBuzz = () => {
  console.log(`----------------\nExercise 6 :\n`);
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz\n");
    } else if (i % 5 === 0) {
      console.log("Buzz\n");
    } else if (i % 3 === 0) {
      console.log("Fizz\n");
    } else {
      console.log(i + "\n");
    }
  }
};
fizzBuzz();
const sumOfMultiplies = () => {
  let resultOfThree = 0;
  let resultOfFive = 0;
  let resultTogether = 0;
  let total = 0;
  console.log(`----------------\nExercise 7 :\n`);
  for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultTogether += i;
      console.log(`${i} is multiple of 3 and 5\n`);
    } else if (i % 3 === 0) {
      resultOfThree += i;
      console.log(`${i} is multiple of 3\n`);
    } else if (i % 5 === 0) {
      resultOfFive += i;
      console.log(`${i} is multiple of 5\n`);
    } else {
      console.log(`${i} is not multiple of 3 or 5\n`);
    }
  }
  total = resultOfThree + resultOfFive + resultTogether;

  console.log(`The sum of multiplies by 3 && 5 : ${resultTogether}\n`);
  console.log(`The sum of multiplies by 3 : ${resultOfThree}\n`);
  console.log(`The sum of multiplies by 5 : ${resultOfThree}\n`);
  console.log(`The total = ${total}`);
};
sumOfMultiplies();
const familyFriendsarr = () => {
  let arr = [
    ["Adeeb", "Sameera", "Heba", "Hamzeh", "Lubna", "Adam"],
    ["Tariq", "Mahmood", "Rami", "Motasem"]
  ];
  console.log(`----------------\nExercise 8 :\n`);
  console.log(`My family: ${arr[0]}\n`);
  console.log(`My friends: ${arr[1]}\n`);
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      console.log(`Hello ${arr[i][j]}\n`);
      console.log(`${arr[i][j]} is at index [${i}][${j}] of my array.\n `);
    }
  }
};
familyFriendsarr();
const output1 = () => {
  console.log(`----------------\nExercise 9 :\n`);
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += i * 100 + " ";
  }
  console.log(`${result}\n`);
};
output1();
const output2 = () => {
  let string = "";
  let result = 1;
  for (let i = 1; i <= 8; i++) {
    string += result + "  ";
    result *= 2;
  }
  console.log(`${string}\n`);
};
output2();
const output3 = () => {
  let string = "";
  let result = 0;
  for (let i = 0; i <= 10; i = i + 2) {
    string += i + "  ";
  }
  console.log(`${string}\n`);
};
output3();
const output4 = () => {
  let string = "";
  let result = 0;
  for (let i = 0; i <= 15; i = i + 3) {
    string += i + "  ";
  }
  console.log(`${string}\n`);
};
output4();
const output5 = () => {
  let string = "";
  for (let i = 9; i >= 0; i--) {
    string += i + "  ";
  }
  console.log(`${string}\n`);
};
output5();
const checkPalindrome = str => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
let str1 = "Hatem";
let str2 = "madam";
console.log(`----------------\nExercise 10 :\n`);
console.log(`${str1} ===> ${checkPalindrome(str1)}\n`);
console.log(`${str2} ===> ${checkPalindrome(str2)}`);
