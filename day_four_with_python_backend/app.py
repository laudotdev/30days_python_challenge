from flask import Flask, jsonify, render_template, request
from validator import grade_validator

app = Flask(__name__)

@app.route("/")
def home():

    return render_template("index.html")

@app.route("/api/validate", methods=["POST"])

def validate():
    data = request.get_json()
    
    grade = int(data["grade"])
    result = grade_validator(grade)

    return jsonify({
        "grade": grade,
        "result": result
    })

if __name__ == "__main__":
    app.run(debug=True)

