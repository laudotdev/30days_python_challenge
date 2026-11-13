def validator(full_name, email, subject, message, is_success = False):
    errors = {}

    at_index = email.find("@")
    local_part = email[:at_index]
    dot_index = email.rfind(".")
    after_at = email[at_index + 1:dot_index]
    domain = email[dot_index + 1:]

    if len(full_name) < 3:
        errors["full_name"] = "Full name must be at least 3 characters."
    if not full_name.isalpha():
        errors["full_name"] = "Full name must not contain numbers."

    if dot_index == -1 or dot_index < at_index or len(local_part) < 1 or len(domain) < 1 or len(after_at) < 1:
        errors["email"] = "Invalid email address."

    if len(subject) < 3:
        errors["subject"] = "Subject must be at least 3 characters."

    if len(message) < 10:
        errors["message"] = "Message must be at least 10 characters."

    if errors:
        return {
            "status": "error",
            "errors": errors
        }
    else:
        return {
            "status": "success",
            "message": "Form submitted successfully",
            "name": full_name,
            "errors": {},
            "is_success": True
        }