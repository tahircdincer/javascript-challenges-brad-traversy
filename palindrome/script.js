"use strict";

// ' My solution '
// My solution lacks of ' non- alphanumeric ' characters solution

const isPalindrome = function (str) {
  if (str.toLowerCase() === str.toLowerCase().split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};
// ' Split ' method so can be reversed through ' reverse ' array method. Then join back so can be string again.

// Solution 2- Which ' instructor ' recommends to apply a regular expression

// ' Replace ' method so ' non- alphanumeric ' characters will be empty string which is nothing in JavaScript.

const isPalindrome2 = function (str) {
  const nonAlphaNumericFix = str.toLowerCase().replace(/[ ^a-z0-9 ]/g, "");
  const rvrsdString = str.split("").reverse().join("");
  return nonAlphaNumericFix === rvrsdString; // if it checks, then returns true
};

// Solution 3- ' Instructor ' s solution. - If regular expression not applied then this solution.
// Function for to ' remove ' ' non- alphanumeric ' characters.
// Function for to ' reverse ' the string.
// Function for to check if it is ' alphanumeric ' ( So can remove ' non- alphanumeric ' characters )
// There is a number for each character.
// Solution 3' ll be added.

// ' Palindrome '
