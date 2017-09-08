'use stict'

const breakChocolate = function(n, m) {
 if (typeof n !== 'number' || typeof m !== 'number') {
   return 0
  } else {
   return (n * m) - 1
  }
};

console.log(breakChocolate(1, -1));
