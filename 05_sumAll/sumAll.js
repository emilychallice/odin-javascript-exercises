const sumAll = function(a, b) {
  // Check for non-numbers
  if ( +a !== a || +b !== b ) {
    return "ERROR";
  }

  // Negative number args?
  if (a < 0 || b < 0) {
    return "ERROR";
  }
  
  // Check which number is lower/higher
  let lowNum = a <= b ? a : b;
  let highNum = a > b ? a : b;

  if (a == b) {
    return a;
  }

  // Compute sum between the numbers
  let sum = 0;
  for (let i = lowNum; i <= highNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
