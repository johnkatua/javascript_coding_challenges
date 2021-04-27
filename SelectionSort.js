// Selection Sort
// This algorithm divides the input array into 2 sublists - a sorted and unsorted sublist

const selectionSort = (inputArr) => {
  let n = inputArr.length;
  for (let i = 0; i < n; i++) {
    // find the smallest number in the subArray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  };
  return inputArr;
};

let inputArr = [20, 56, 1, 3];
selectionSort(inputArr)
console.log(inputArr);