# Input student marks
marks ={
    "Math": float(input("Enter Math marks: ")),
    "Science": float(input("Enter Science marks: ")),
    "English": float(input("Enter English marks: ")),
}

# Calculate total and percentage
total_marks = sum(marks.values())
percentage = total_marks / len(marks)


if percentage >= 90:
    grade = "A"
elif percentage >= 80:
    grade = "B"
elif percentage >= 70:
    grade = "C"
elif percentage >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Total Marks: {total_marks}")
print(f"Percentage: {percentage:.2f}%")
print(f"Grade: {grade}")
