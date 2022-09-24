// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const functionalDifference = arr => {
  const arrLength = arr.length;
  let d1 = 0, d2 = 0;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (i === j) {
        d1 += arr[i][j];
      }
      if (i + j === arrLength - 1) {
        d2 += arr[i][j]
      }
    }
  }
  return Math.abs(d1 - d2);
}

console.log(functionalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))