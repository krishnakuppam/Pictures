# Example: Simple Calculator
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b != 0:  
        return a / b
    else:
        return "Cannot divide by zero"

# Scope Example
def calculator():
    num1 = float(input("Enter first number: "))  # variable & data type
    num2 = float(input("Enter second number: "))
    operator = input("Enter operator (+, -, *, /): ")

    if operator == "+":
        result = add(num1, num2)
    elif operator == "-":
        result = subtract(num1, num2)
    elif operator == "*":
        result = multiply(num1, num2)
    elif operator == "/":
        result = divide(num1, num2)
    else:
        result = "Invalid Operator"

    print("Result:", result)

calculator()  # Call function

