const findTheOldest = function(arr) {
  return arr.reduce((acc, cur) => {
    let accAge = getAge(acc);
    let curAge = getAge(cur);

    return curAge > accAge ? cur : acc;
  });
};

function getAge(person) {
  if (!person.yearOfDeath) {
    let currentYear = new Date().getFullYear();
    return currentYear - person.yearOfBirth;
  } else {
    return person.yearOfDeath - person.yearOfBirth;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
