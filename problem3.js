const readline = require('readline');

function frequent(arr) {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentElement = null;

  for (const element of arr) {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    if (frequencyMap[element] > maxFrequency) {
      maxFrequency = frequencyMap[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers: ", function(input) {
  const numbersArray = input.split(' ').map(Number);
  const mostFrequent = frequent(numbersArray);
  console.log("Most frequent element:", mostFrequent);
  rl.close();
});
