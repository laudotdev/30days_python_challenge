from flask import Flask, render_template, jsonify, request
from calculate import add
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/api/add', methods=['POST'])
def calculates():
    data = request.get_json()

    num_one_py = int(data['num_one'])
    num_two_py = int(data['num_two'])
    result = add(num_one_py, num_two_py)

    return jsonify({
        "result": result
    })

if __name__ == "__main__":
    app.run(debug=True)
