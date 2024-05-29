"use strict";

// ' My solution '

const removeDuplicates = function (arr) {
  const arrUnique = new Set(arr);
  return [...arrUnique];
};

//  ' to delete ' duplicant ' element 's from array. More practical way is ' sets '.
// Argument' ll be a ' set ' in ' arrUnique ' variable.
// I applied a ' spread operator ' so it can return an array. ( Even though ' set ' is about arrays, set ' isn' t ' array so spread operator - array form' s back again -. )
