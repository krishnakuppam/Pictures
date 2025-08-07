// Simple Console Calculator in JavaScript

function calculator() {
  console.log("Welcome to Console Calculator");
  console.log("Choose operation: +, -, *, /");

  const operator = prompt("Enter operator (+, -, *, /):");
  const num1 = parseFloat(prompt("Enter first number:"));
  const num2 = parseFloat(prompt("Enter second number:"));
  let result;

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
        console.log("Error: Division by zero!");
        return;
      }
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operator");
      return;
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}

// Run the calculator
calculator();
