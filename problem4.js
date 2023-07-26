const readline = require('readline');

function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null; 
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a sorted array of: ", function(inputArray) {
  rl.question("Enter the target value: ", function(targetValue) {
    const numbersArray = inputArray.split(' ').map(Number);
    const indices = findTwoNumbersWithSum(numbersArray, parseInt(targetValue));
    console.log("Indices of two numbers:", indices);
    rl.close();
  });
});
