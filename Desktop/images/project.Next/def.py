
# def greet(name):
#     return f"Hello, {name}!"

# print(greet("Alice"))  # Output: Hello, Alice!

# i=  (a,b):
#     # return a+b
#  result = add(3,5)
# print (result)


# def greet(name="Guest"):
#     print(f"Hello, {name}!")

# greet("krishnA")         # Uses default value
# greet("Alice")  # Uses given value


# def arithmetic_operations(a, b):
#     return a + b, a - b, a * b,a/b

# sum_, diff, prod,div = arithmetic_operations(10, 5)
# print("Sum:", sum_)
# print("Difference:", diff)
# print("Product:", prod)
# print("Division:", div)
 
def outer_function():
    def inner_function():
        print("Hello from inner function!")
    inner_function()

outer_function()
