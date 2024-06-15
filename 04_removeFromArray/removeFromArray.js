const removeFromArray = function(arr, ...elements)
{
  let newArr = [];
  let elems = Array.from(elements);

  for (let j = 0; j < arr.length; j++)
  {
    if (!elements.includes(arr[j]))
    {
      newArr.push(arr[j]);
    }
  }
  return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
