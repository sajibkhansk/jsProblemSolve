const readline = require('readline');

function romanToInt(romanNumeral) {
    const mapping = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
      };
    
      let result = 0;
    
      for (let i = 0; i < romanNumeral.length; i++) {
        const currentDigit = mapping[romanNumeral[i]];
        const nextDigit = mapping[romanNumeral[i + 1]];
    
        if (nextDigit > currentDigit) {
          result += (nextDigit - currentDigit);
          i++; 
        } else {
          result += currentDigit;
        }
      }
    
      return result;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a Roman numeral: ", function(romanNumeral) {
  const integerResult = romanToInt(romanNumeral.toUpperCase());
  console.log("Integer value:", integerResult);
  rl.close();
});
