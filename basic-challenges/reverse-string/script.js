"use strict";
//  restricted - Loop only ( Built - in methods won' t apply )
let stringString = "";

const reverseString = function (str) {
  for (let i = str.length - 1; i >= 0; i--) {
    stringString += str[i];
  }
  return stringString;
};

// My solution, ' comments '-
/* '
// Formed an empty string. So can loop into it.
// i ' isn' t ' increment because it is a reverse string. So in a descending order.
// Each iteration adds into ' stringString ' variable which was empty
// empty string variable defined in global scope, so no scope issues both in loop, returning

// can also apply ' split, reverse, join ' methods but instruction told to do it in loops.
'
*/
