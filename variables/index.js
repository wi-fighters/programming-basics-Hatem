// 1. Declare a variable called name. Assign a string value. Print to screen.
//2. Print to screen that name with a "Schm" in front of it.
function schm(name) {
  return "schm" + name;
}
console.log(schm("Hatem"));

// 5. Declare a variable called coffee.Assign it a numeric value.

// 6. Print to screen a string that tells us x regularly drinks y cups of coffee per day.

// 7. Declare a variable called daysBeforeExam.Assign it a numeric value.

// 8. Print to screen a string that tells us x drinks y cups of coffee with n days before exam.

// 9. Making use of`+=` and`-=`, print to screen a string that has x drinking one more cup of coffee, with (n - 1) less days before exam.
function drinking(name, coffee, daysBeforeExam) {
  coffee += 1;
  daysBeforeExam -= 1;
  return ` I am ${name} and I drink ${coffee} cups of coffee with ${daysBeforeExam} days before exam`;
}
console.log(drinking("Eva", 10, 7));

// 12. Declare a variable called schmozzler. Assign it a string value of "Schm".

// 13. Using the concat() function, print to screen the name variable linked to schmozzler.

// 14. What value does name have now ? Comment your answer and then print name to screen to test.
function schmozzler(name) {
  const schmo = "Schm";
  return schmo.concat(name);
}
console.log(schmozzler("Hatem"));

// 1. Declare a variable called name. Assign a string value. Print to screen.
let name = "Hatem";
console.log(`My name is: ${name}`);

// 2. Print to screen that name with a "Schm" in front of it.
name = "Schm" + name;
console.log(`We have new name: ${name}`);

// 3. What value does name have now? Comment your answer and then print name to screen to test.
// The answer is: name has this value --> SchmHatem
console.log(`The value of the variable name: ${name}`);

// 4. Assign another string value to name. Print to screen. Comment why name has now had two different values.
name = "Zreek";
console.log(`Reassign the name: ${name}`); // the name variable has new value because we reassign it and the type of the variable name is let
// so we can reassign it

// 5. Declare a variable called coffee. Assign it a numeric value.
let coffee = 33;

// 6. Print to screen a string that tells us x regularly drinks y cups of coffee per day.
name = "Hatem";
console.log(`${name} regularly drinks ${coffee} cups of coffee per day`);

// 7. Declare a variable called daysBeforeExam. Assign it a numeric value.
let daysBeforeExam = 7;

// 8. Print to screen a string that tells us x drinks y cups of coffee with n days before exam.
console.log(
  `${name} drinks ${coffee} cups of coffee with ${daysBeforeExam} days before exam`
);

// 9. Making use of `+=` and `-=`, print to screen a string that has x drinking one more cup of coffee, with (n - 1) less days before exam.
coffee += 1;
daysBeforeExam -= 1;
console.log(
  `${name} drinking ${coffee} cups of coffee "one more cup", with ${daysBeforeExam} less days before exam`
);

// 10. What value do coffee and daysBeforeExam currently have? Comment your answer, then print to screen the variables to test.
// the value of coffee = 33 + 1 = 34 and the value of daysBeforeExam = 7
console.log(`coffee = ${coffee} \ndaysBeforeExam = ${daysBeforeExam} `);

// 11. Review variable values throughout code.

// 12. Declare a variable called schmozzler. Assign it a string value of "Schm".
let schmozzler = "Schm";

// 13. Using the concat() function, print to screen the name variable linked to schmozzler.
console.log(
  `By using the concat() function we get this string: ${schmozzler.concat(
    name
  )}`
);

// 14. What value does name have now? Comment your answer and then print name to screen to test.
// I think the value of name is Hatem. This means no changes because we didn't assign the value of the variable schmozzler to the variable name.
console.log(`the latest value of name is: ${name}`);
