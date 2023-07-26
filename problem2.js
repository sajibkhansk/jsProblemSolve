const readline = require('readline');

function sum(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > 0) {
      sum += numbersArray[i];
    }
  }
  return sum;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers : ", function(input) {
  const numbersArray = input.split(' ').map(Number);
  const positiveSum = sum(numbersArray);
  console.log("Sum of positive numbers:", positiveSum);
  rl.close();
});
