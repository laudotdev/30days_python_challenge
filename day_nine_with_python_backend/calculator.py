def calculate(number_one, number_two, opt):
    if opt == "+":
        return number_one + number_two
    elif opt == "-":
        return number_one - number_two
    elif opt == "*":
        return number_one * number_two
    elif opt == "/":
        if number_two != 0:
            return number_one / number_two
        else:
            return "Error: Division by zero."
    else:
        return "Invalid Operator."