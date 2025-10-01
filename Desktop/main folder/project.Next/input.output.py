# # name = input("entre name")

# # print("hello",name, sep  ="," , end="!")


# a = input()
# x ,y ,z = a.split()
# sum = int(x) + int(y) + int(z)
# print(sum)

balance = 11000.00

withdraw = int (input ("Enter amount "))

if withdraw > 0:

    if withdraw % 100 == 0:
        if withdraw <= balance:
            balance -= withdraw
            print("Transaction Successful")
            print("Available balance :", balance)
        else:
         print("Insufficient Balance")
    else:
        print("Enter amount in multiples of 100")
else:
    print("Invalid amount")
    
# def check():
#     print("Function called")
#     return True

# print(False and check())  
# print(True or check())  

# this is area of a cricle

# radius = int(input("Give a radius:"))
# a = 3.14*(radius**2)
# print("Area of radius ",a)

 