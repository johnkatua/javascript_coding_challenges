// check if a string is palindrome

const palindromeChecker = (str) => {
  let trimmed = str.replace(/[^\w]/g, '');
  return trimmed === trimmed.split('').reverse().join('');
};

console.log(palindromeChecker('poop'));

// expected answer = true;