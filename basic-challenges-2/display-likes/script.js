"use strict";

const displayLikes = function (arr) {
  if (arr.length === 0) {
    return " Nope ";
  } else if (arr.length === 1) {
    return ` ${arr.at(0)} liked this. `;
  } else if (arr.length === 2) {
    return ` ${arr.at(0)}, ${arr.at(1)} liked this. `;
  } else if (arr.length === 3) {
    return ` ${arr.at(0)}, ${arr.at(1)} & ${arr.at(2)} liked this. `;
  } else {
    return ` ${arr.at(0)}, ${arr.at(1)} & ${
      arr.length - 2
    } people liked this. `;
  }
};

/* My Solution-
I know there might be some ' simpler ' ways to do this. I thought about to apply a ' switch ' statement but applied an ' if- else ' statement.
I didn' t apply ' bracket ' notation. 
I applied ' at ' method.

*/
