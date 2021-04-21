// given an array of objects, sort the object by population size. Return the entire object

const sortObjects = (arr) => {
  return arr.sort((a, b) => (a.population > b.population) ? 1 : -1);
}

console.log(sortObjects(['98', '567', '2']));

// expected result is ['2', '567', '98'];