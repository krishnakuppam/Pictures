// Check if we're running in Node.js or browser
if (typeof window === 'undefined') {
    // Node.js environment
    const readline = require('readline');
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    function askQuestion(question) {
        return new Promise((resolve) => {
            rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }
    
    async function calculator() {
        const num1Input = await askQuestion("Enter the first number: ");
        const operatorInput = await askQuestion("Enter the operator (+, -, *, /): ");
        const num2Input = await askQuestion("Enter the second number: ");
        
        let num1 = parseFloat(num1Input);
        let operator = operatorInput;
        let num2 = parseFloat(num2Input);
        let result;
      
        if (isNaN(num1) || isNaN(num2)) {
          console.log("Invalid input. Please enter valid numbers.");
          rl.close();
          return;
        }
      
        switch (operator) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            if (num2 === 0) {
              console.log("Error: Division by zero is not allowed.");
              rl.close();
              return;
            }
            result = num1 / num2;
            break;
          default:
            console.log("Invalid operator. Use +, -, *, or /.");
            rl.close();
            return;
        }
      
        console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
        rl.close();
    }
    
    calculator();
} else {
    // Browser environment
    function calculator() {
        let num1 = parseFloat(prompt("Enter the first number:"));
        let operator = prompt("Enter the operator (+, -, *, /):");
        let num2 = parseFloat(prompt("Enter the second number:"));
        let result;
      
        if (isNaN(num1) || isNaN(num2)) {
          console.log("Invalid input. Please enter valid numbers.");
          return;
        }
      
        switch (operator) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            if (num2 === 0) {
              console.log("Error: Division by zero is not allowed.");
              return;
            }
            result = num1 / num2;
            break;
          default:
            console.log("Invalid operator. Use +, -, *, or /.");
            return;
        }
      
        console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
    }
      
    // Call the function
    calculator();
}
  