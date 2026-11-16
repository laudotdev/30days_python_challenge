from datetime import datetime, timedelta

failed_attempts = []

def login_validator(username, password):

    global failed_attempts

    events = {}
    is_login = False
    username_real = "lau"
    password_real = "123lau"

    current_time = datetime.now()
    current_time.strftime("%H:%M:%S")

    five_mins_ago = current_time - timedelta(minutes=5)

    failed_attempts = [t for t in failed_attempts if isinstance(t, datetime) and t > five_mins_ago]

    if len(failed_attempts) >= 4:
        unlock_time = failed_attempts[0] + timedelta(minutes=5)
        wait_secs = int((unlock_time - current_time).total_seconds())

        events["message"] = "Too many failed attemps."
        events["actions"] = "locked_out"
        events["token"] = f"Please try again in {wait_secs} seconds."
        return events, False


    if password != password_real or username != username_real:
        failed_attempts.append(current_time) # record the timestamp of this failure
        attemps_left = 4 - len(failed_attempts)

        events["message"] = "Invalid credentials.", False
        events["actions"] = "failed_login."

        if attemps_left == 0:
            events["token"] = "Maximum attempts reached. Please try again in 5 minutes."
        else:
            events["token"] = f"{attemps_left} attempt(s) remaining."

        is_login = False

    else: 
        # resets the failed attempts upon a successful login
        failed_attempts.clear()
        events["message"] = (f"Successfully Login, hello {username_real}", True)
        events["actions"] = "login"
        is_login = True

    return events, is_login