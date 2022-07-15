//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
let blue = "blue"
faveColors.push(blue)
console.log(faveColors)
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]
let middleNums = []
//CODE HERE
//numbers.splice(0,2)
//console.log(numbers);
for(i = 0; i<numbers.length; i--)
{
let middleNum = Math.floor(numbers.length / 2); // index 2
// let value = numbers[middleNum]
// console.log(value);
// middleNums.push(value)
// console.log(middleNums);
}
//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]
let answers = []
// CODE HERE
bigOrSmallArray.forEach((item)=>
{
  if (item <=100){
    answers.push(item = "small");
  }else
    answers.push(item = "big");
}
)
console.log(answers)