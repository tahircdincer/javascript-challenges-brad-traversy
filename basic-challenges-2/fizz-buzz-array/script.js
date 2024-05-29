"use strict";

const fizzBuzzArray = function (num) {
  const fizzBuzzArrayArray = [];

  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      fizzBuzzArrayArray.push(" Fizzbuzz ");
    } else if (i % 3 === 0) {
      fizzBuzzArrayArray.push(" Fizz ");
    } else if (i % 5 === 0) {
      fizzBuzzArrayArray.push(" Buzz  ");
    } else {
      fizzBuzzArrayArray.push(i);
    }
  }
  return fizzBuzzArrayArray;
};
console.log(fizzBuzzArray(38));

/* My Solution 

An empty array to receive it' s ' element 's from function.
When I did ' remainder 's for both 3, 5 before 15 - Fizzbuzz wasn' t happening such numbers as 15, 30.
If a number is divisible ' by ' both then it is divisible by 15. ( I could also apply ' && ' operator, conditions for 3, 5 )


*/
