from flask import Flask, render_template, request, jsonify
from calculator import calculate

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/calculate", methods=["POST"])
def calculate_route():
    data = request.get_json()
    number_one_py = float(data["number_one"])
    number_two_py = float(data["number_two"])
    opt = data["operator"]

    result = calculate(number_one_py, number_two_py, opt)

    return jsonify({
        "result": result
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)