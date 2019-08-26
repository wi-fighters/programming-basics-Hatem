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
