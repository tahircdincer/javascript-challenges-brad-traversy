"use strict";

const findMissingNumber = function (arr) {
  const total = arr.reduce((curr, acc) => curr + acc, 0);
  const n = arr.at(-1);
  const totalSupposed = (n * (n + 1)) / 2;

  if (arr.length === 0) {
    return 1;
  } else if (total !== totalSupposed) {
    console.log(total, totalSupposed);
    return totalSupposed - total;
  }
};

console.log(findMissingNumber([0, 1, 2, 3, 4, 6, 7, 8]));
console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]));

/*

If substract the reduced amount from total supposed amount ( which is n * ( n + 1 )/ 2 ) it returns ' the ' number ' '.


*/
