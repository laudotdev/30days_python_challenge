def login_validator(username, password):

    username_real = "lau"
    password_real = "123lau"

    if password != password_real or username != username_real:
        return "Invalid credentials. Please try again.", False
    else: 
        return f"Successfully Login, hello {username_real}", True