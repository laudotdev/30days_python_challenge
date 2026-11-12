def validator(full_name, email, subject, message):
    if len(full_name) < 3:
        return "Required Full Name, minimum 3 characters"

    if email.find("@") == -1:
        return "Invalid email address"
    if len(subject) < 3:
        return "Required subject, minimum 3 characters."
    if len(message) < 10:
        return "Required message, minimum 10 characters."