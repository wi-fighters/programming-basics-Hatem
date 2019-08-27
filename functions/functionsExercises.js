// // Write a function named tellFortune that:
// // takes 4 arguments: number of children, partner's name, geographic location, job title.
// // outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// // Call that function 3 times with 3 different values for the arguments.

// function tellFortune(num, name, loc, job) {
//   if (num === 1) {
//     return `You will be a ${job} in ${loc}, and married to ${name} with ${num} kid.`;
//   }
//   return `You will be a ${job} in ${loc}, and married to ${name} with ${num} kids.`;
// }
// console.log(tellFortune(1, "Lubna", "Berlin", "Junior Web Developer"));
// console.log(tellFortune(3, "Hiba", "Latakia", "Sales Manager"));
// console.log(tellFortune(0, "Malena", "Budapest", "IT Engineer"));

// // Write a function named calculateDogAge that:
// // takes 1 argument: your puppy's age.
// // calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// // outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// // Call the function three times with different sets of values.
// // Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
// function calculateDogAge(dogAge, humanAge) {
//   const calAge = (7 * dogAge) / humanAge;
//   return `Your doggie is ${calAge} years old in dog years!`;
// }
// console.log(calculateDogAge(9, 3));
// console.log(calculateDogAge(4, 2));
// console.log(calculateDogAge(8, 8));

// // Write a function named calculateSupply that:
// // takes 2 arguments: age, amount per day.
// // calculates the amount consumed for rest of the life(based on a constant max age).
// // outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// // Call that function three times, passing in different values each time.
// // Bonus: Accept floating point values for amount per day, and round the result to a round number.

// function calculateSupply(age, amountPerDay) {
//   const maxAge = 80;
//   const calAmount = Math.ceil(amountPerDay) * 365 * (maxAge - age);
//   return `You will need ${calAmount} to last you until the ripe old age of ${maxAge}`;
// }
// console.log(calculateSupply(31, 70.5));
// console.log(calculateSupply(30, 90.2));
// console.log(calculateSupply(58, 75.6));

// // Create 2 functions that calculate properties of a circle, using the definitions here.

// // Create a function called calcCircumfrence:

// // Pass the radius to the function.
// // Calculate the circumference based on the radius, and output "The circumference is NN".
// // Create a function called calcArea:

// // Pass the radius to the function.
// // Calculate the area based on the radius, and output "The area is NN".
// function calcCircumfrence(radius) {
//   const pi = 3.14;
//   const circumference = 2 * pi * radius;
//   return `The circumference is ${circumference}. \nThe area is ${calcArea(
//     radius
//   )}`;
//   function calcArea(radius) {
//     const area = pi * radius * radius;
//     return `The area is ${area}`;
//   }
// }
// console.log(calcCircumfrence(4));

// 2
function calculateDogAge(dogAge, age) {
  const puppyAge = age / 7;
  const humanAge = dogAge * 7;
  return `Your doggie is ${humanAge} years old in dog years. Your age in dog years is ${puppyAge}`;
}
console.log(calculateDogAge(3, 30));
console.log(calculateDogAge(7, 43));
console.log(calculateDogAge(12, 50));

//3
function calculateSupply(age, perDay) {
  const maxAge = 80;
  const restOfLife = (maxAge - age) * (perDay * 365);
  return `You will need ${restOfLife} chocolate balls to last you until the age of ${maxAge}`;
}
console.log(calculateSupply(32, 2));
console.log(calculateSupply(35, 4));
console.log(calculateSupply(32, 5));

function calcCircumfrence(radius) {
  const pi = 3.14;
  const circEquation = 2 * pi * radius;
  return `The circumference is: ${circEquation}`;
}
function calcArea(radius) {
  const pi = 3.14;
  const area = pi * radius * radius;
  return `The area is: ${area}`;
}
console.log(calcCircumfrence(4), calcArea(4));

// last
function celsiusToFahrenheit(celsius) {
  const convertedTemp = ((celsius * 9) / 5) + 32;
  return ${ celsius } °C is ${ convertedTemp } °F.
}
console.log(celsiusToFahrenheit(20));
function fahrenheitToCelsius(fahrenheit) {
  const convertedTemp = ((fahrenheit - 32) * 5) / 9;
  return ${ fahrenheit } °F is ${ convertedTemp } °C.
}
console.log(fahrenheitToCelsius(40));

