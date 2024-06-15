const palindromes = function (s)
{
  let alphanumChars = "abcdefghijklmnopqrstuvwxyz1234567890"

  sProcessed = "";
  for (let i = 0; i < s.length; i++)
  {
    c = s[i].toLowerCase();
    if (alphanumChars.includes(c))
    {
      sProcessed += c;
    }
  }

  sReversed = "";
  for (let i = sProcessed.length - 1; i >= 0; i--)
  {
    sReversed += sProcessed[i];
  }
  return sReversed === sProcessed;
};

// console.log(palindromes("racecar"));
// console.log(palindromes("racecar!"));

// Do not edit below this line
module.exports = palindromes;
