
const readline = require('readline');

function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("Enter a string to reverse: ", function(userInput) {
  const reversedInput = reverseString(userInput);
  console.log("Reversed string:", reversedInput);
  rl.close();
});
