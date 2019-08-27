// array declaration
var sandwich = ["peanut butter", "jelly", "bread"];

// Multi-dimensional Array
[["Bulls", 23], ["White Sox", 45]]

// Access Array Data with Indexes
the first   element in an array is element 0
var array =                 [50,60,70];
array[0]; // equals 50
var data = array[1]; // equals 60

// Modify Array Data With Indexes
Unlike strings, the entries of arrays are mutable and can be changed freely.
var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]

// Access Multi-Dimensional Arrays With Indexes
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
  ];
  arr[3]; // equals [[10,11,12], 13, 14]
  arr[3][0]; // equals [10,11,12]
  arr[3][0][1]; // equals 11

  // Manipulate Arrays With push()
  .push() takes one or more parameters and "pushes" them onto the end of the array.
  var arr = [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]

// Manipulate Arrays With pop()
.pop() removes the last element from an array and returns that element.
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]

//  Manipulate Arrays With shift()
It works just like .pop(), except it removes the first element instead of the last.