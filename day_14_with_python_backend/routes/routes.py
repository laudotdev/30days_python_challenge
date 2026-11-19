import os
import sys # os and sys need pag ang import file ay nasa labas ng folder

parent = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.append(parent)

from flask import Blueprint, render_template, jsonify, request
from logic import encryption_text, decryption_text

home = Blueprint("home", __name__)

@home.route('/')
def index():
    return render_template('index.html')
    
@home.route('/api/encryption', methods=['POST'])
def encryption_route():
    data = request.get_json()
    
    encryption_req = str(data['encryption'])
    
    result = encryption_text(encryption_req)
    
    return jsonify({
        "result": result
    })
    
@home.route('/api/decryption', methods=['POST'])
def decryption_route():
    data = request.get_json()
    
    decryption_req = str(data['decryption'])
    
    result = decryption_text(decryption_req)
    
    return jsonify({
        "result": result
    })