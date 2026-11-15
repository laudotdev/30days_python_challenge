from flask import Flask, render_template, jsonify, request
from logic import login_validator

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username_req = str(data['username'])
    password_req = str(data['password'])

    result, status = login_validator(username_req, password_req)

    return jsonify({
        "result": result,
        "status": status
    })

if __name__ == "__main__":
    app.run(debug=True)