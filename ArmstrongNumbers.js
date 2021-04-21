// An armstrong number  is an n-digit number that is equal to the sum of the nth power of its digit
// e.g a^n + b^n + c^n = abc;

const isArmstrongNumber = (n) => {
  let strNumber = n + '';
  let power = strNumber.length;
  let sum = 0;

  for (let i = 0; i < strNumber.length; i++) {
    sum += Math.pow(Number(strNumber[i]), power);
  }
  return sum === n;
};

console.log(isArmstrongNumber(371));

// expected answer is true;