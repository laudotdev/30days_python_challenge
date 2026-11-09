from flask import Flask, render_template, request, jsonify
from logic import name, score

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/logic", methods=["POST"])
def logics():
    data = request.get_json()

    score_py = int(data['score'])
    result = score(score_py)

    return jsonify({
        "score": score_py,
        "result": result
    })


if __name__ == "__main__":
    app.run(debug=True)