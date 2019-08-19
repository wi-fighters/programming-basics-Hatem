const name = "J S";
const splitString1 = "J";
const splitString2 = "S";
const lengthofString = splitString1.length + splitString2.length;
console.log(`Hello ${name}.`);
console.log(`Your name is ${lengthofString} letters long.`);
console.log(`The first letter of your name is ${name[0]}, the last is ${name[name.length-1]}.`);
const newString = "chmoo";
const modifiedString = name.substring(0, 4);
console.log(`If I wanted to be funny, I would call you ${modifiedString}${newString}`);
      