// approach 1
function longestStr1() {
  let arr = ['1', '12', '123'];
  let longest = '';

  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(longestStr1());
// expected output = 123

// approach 2
const longestStr2 = () => {
  let arr = ['a', 'ab', 'abc'];
  let longest = '';

  arr.map((item) => {
    if (item.length > longest.length) {
      longest = item;
    }
  });
  return longest;
};

console.log(longestStr2());
// expected output = abc
