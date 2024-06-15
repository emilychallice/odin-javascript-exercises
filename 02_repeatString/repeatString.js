const repeatString = function(s, n)
{
  if ( n >= 0 )
  {
    let repeated = "";
    for (let i = 0; i < n; i++)
    {
      repeated += s;
    }
    return repeated;
  }
  else
  {
    return("ERROR");
  }
};

// Do not edit below this line
module.exports = repeatString;
