// approach 1
const char_count = (str, letter) => {
  let letter_count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      letter_count += 1;
    }
  };
  return letter_count;
};

console.log(char_count('google.com', 'o'));

// expected result = 3

// return the character repeated the most

const characterCount = (str) => {
  const charCount = {};
  let maxCharCount = 0;
  let maxChar = '';

  for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = ++charCount[str[i]] || 1;
  }
  for (let key in charCount) {
    if (charCount[key] >= maxCharCount) {
      maxCharCount = charCount[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(characterCount('google.com'));

// expected result = 'o';