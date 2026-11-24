import os
import sys # os and sys need pag ang import file ay nasa labas ng folder

parent = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.append(parent)

from flask import Blueprint, render_template, jsonify, request
from weather import get_current_weather

home = Blueprint("home", __name__)

@home.route('/')
def index():
    return render_template('index.html')
    
@home.route('/api/city', methods=['POST'])
def city_route():
    data = request.get_json()
    
    city_req = str(data['city'])
    
    result = get_current_weather(city_req)
    
    if result is None:
        return jsonify({
            "error": "Cannot get your location"
        }), 404
    
    return jsonify({
        "result": result
    })
    
