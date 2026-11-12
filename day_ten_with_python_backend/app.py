from flask import Flask, render_template, request, jsonify
from validator import validator

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/api/validator', methods=["POST"])
def validate_form():
    data = request.get_json()

    full_name_server = str(data['full_name'])
    email_server = str(data['email'])
    subject_server = str(['subject'])
    message_server = str(data['message'])

    result = validator(full_name_server, email_server, subject_server, message_server)

    return jsonify({
        "result": result
    })

if __name__ == "__main__":
    app.run(debug=True)