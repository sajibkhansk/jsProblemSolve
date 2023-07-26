const readline = require('readline');

function calculate(num1, num2, operator) {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      return num1 / num2;
    } else {
      return "Invalid operator";
    }
  }
  

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the first number: ", function(inputNum1) {
  rl.question("Enter the second number: ", function(inputNum2) {
    rl.question("Enter the operator (+, -, *, /): ", function(inputOperator) {
      const num1 = parseFloat(inputNum1);
      const num2 = parseFloat(inputNum2);
      const result = calculate(num1, num2, inputOperator);
      console.log("Result:", result);
      rl.close();
    });
  });
});
