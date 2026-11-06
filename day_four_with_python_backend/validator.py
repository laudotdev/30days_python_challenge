def grade_validator(grade):
    if grade >= 0 and grade <= 74:
        return "Failed"
    elif grade >= 75 and grade <= 100:
        return "Passed"
    elif grade < 0:
        return "Grade can't be negative."
    else:
        return f"Grade can't be {grade} or higher."

try:
    user_grade = int(input("Enter your grade: "))
    result = grade_validator(user_grade)
    print(result)
except ValueError:
    print("Invalid input.")