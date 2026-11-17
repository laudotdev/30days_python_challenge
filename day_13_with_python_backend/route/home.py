import os
import sys # os and sys need pag ang import file ay nasa labas ng folder

parent = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.append(parent)

from flask import Blueprint, render_template, request, jsonify
from logic import convert_to_binary, convert_to_string

home = Blueprint("home", __name__) # creates an object for Blueprint "home" is the blueprint name

@home.route("/")
def index():
    return render_template("index.html")
    
@home.route("/api/convert_to_binary", methods=['POST'])
def convert_to_bin():
    data = request.get_json()
    
    text_req = str(data['plain_text'])
    
    result = convert_to_binary(text_req)
    
    return jsonify({
        "result": result
    })
    
@home.route("/api/convert_to_string", methods=['POST'])
def convert_to_str():
    data = request.get_json()
    
    bin_req = str(data['plain_bin'])
    
    result = convert_to_string(bin_req)
    
    return jsonify({
        "result": result
    })