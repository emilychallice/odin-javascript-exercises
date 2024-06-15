const reverseString = function(s)
{
  sReversed = "";
  let sLength = s.length;
  for (let i = sLength; i > 0; i--)
  {
    sReversed += s.at(i - 1);
  }
  return sReversed;
};

// Do not edit below this line
module.exports = reverseString;
