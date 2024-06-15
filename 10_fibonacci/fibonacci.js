const fibonacci = function(idx) {
  idx = +idx;

  if (idx < 0) return "OOPS";
  if (idx === 0) return 0;
  if (idx === 1 || idx === 2) return 1;

  return fibonacci(idx - 1) + fibonacci(idx - 2);
};

// for (let i = 1; i < 10; i++) {
//   console.log(fibonacci(i));
// }

// Do not edit below this line
module.exports = fibonacci;
