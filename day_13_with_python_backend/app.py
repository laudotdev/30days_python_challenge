from flask import Flask
from route.home import home

app = Flask("__name__")
app.register_blueprint(home) # home galing sa Blueprint ng home.py

if __name__ == "__main__":
    app.run(debug=True)