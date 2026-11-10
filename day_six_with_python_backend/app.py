from flask import Flask, render_template, request, jsonify
from logic import score,name

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/logic", methods=["POST"])
def logics():
    data = request.get_json()

    score_py = int(data['score'])
    name_py = str(data['name'])
    result_score = score(score_py)
    result_name = name(name_py)
    
    return jsonify({
        "name": name_py,
        "result_score": result_score,
        "result_name": result_name
    })

if __name__ == "__main__":
    app.run(debug=True)