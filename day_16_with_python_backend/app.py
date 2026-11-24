from flask import Flask, jsonify, request
from routes.routes import home

app = Flask(__name__)
app.register_blueprint(home)

if __name__ == "__main__":
    app.run(debug=True, port=9000)