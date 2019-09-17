// Run Along //
let i = 0;
while (i < 15) {
  console.log(`i = ${i}`);
  i += 1;
}

// city Names //
let cityNames = ["Paris ", "Damascus ", "Latakia ", "Berlin ", "Rome "];
let index = 0; // 1
let string = ""; // "Paris Damascus "
while (index < cityNames.length) {
  string += cityNames[index];
  //index = index + 1;
  index += 1;
  console.log(` The string now = ${string}`);
}

//Odds and Evens
let arr = [6, 9, 10, 19];
let arrIndex = 0;
console.log(`The previous array = ${arr}`);
while (arrIndex < arr.length) {
  let isEven = arr[arrIndex] % 2 === 0;
  if (isEven) {
    arr[arrIndex] -= 1;
  } else {
    arr[arrIndex] += 1;
  }
  ++arrIndex;
}
console.log(`The modified array = ${arr}`);
