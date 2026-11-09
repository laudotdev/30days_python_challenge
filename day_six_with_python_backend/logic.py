is_valid = False
def score(score):
    global is_valid
    if score >= 0 and score <= 100:
        is_valid = True
        return "Valid Score."

    else:
        is_valid = False
        return "Invalid Score"

def name(name):
    if is_valid:
        return f"Congrats {name} Valid score!"
    else:
        return f"{name} has Invalid score"

print(score(90), name("lau"))
print(score(-1), name("rence"))