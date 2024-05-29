"use strict";

const arrayIntersection = function (arr, arr2) {
  const arr3 = [];
  for (let i = 0; i < arr.length && i < arr2.length; i++) {
    if (arr2.includes(arr[i])) {
      arr3.push(arr[i]);
    }
  }
  return arr3;
};
console.log(arrayIntersection([0, 2, 8], [8, 6, 2, 10, 9, 6]));

/* My Solution
Formed a function. It takes two arrays into it' s parameter as arguments.
Formed an empty string.
This function requires a loop so mutual numbers' ll ' pushed ' into the empty array, then returned.

I thought the way of knowing an ' element ' is in both arrays or not is ' includes ' method.
So if arr2 includes arr1' s ' element ' in the current iteration, then this ' element ' ' gets ' ' pushed ' into the ' arr3 '.


*/
