mark = int(input("Enter mark (0–100): "))

if mark >= 90:
    print("Outstanding")
elif 80 <= mark < 90 and mark % 5 == 0:
    print("Excellent")
elif 60 <= mark < 80 and mark % 2 == 0:
    print("Good")
elif 40 <= mark < 60:
    # Check if prime
    is_prime = True
    for i in range(2, mark):
        if mark % i == 0:
            is_prime = False
            break
    if is_prime:
        print("Average")
    else:
        print("Below Average")
else:
    print("Fail")
