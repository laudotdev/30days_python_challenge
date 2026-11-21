import os
import sys # os and sys need pag ang import file ay nasa labas ng folder

parent = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.append(parent)

from flask import Blueprint, render_template, jsonify, request
from logic import write_text, append_file, delete_file

home = Blueprint("home", __name__)

@home.route('/')
def index():
    return render_template('index.html')
    
@home.route('/api/write_file', methods=['POST'])
def file_create_route():
    data = request.get_json()
    
    file_name_req = str(data['write_file_name'])
    
    result = write_text(file_name_req)
    
    return jsonify({
        "result": result
    })
    
@home.route('/api/append_file', methods=['POST'])
def append_file_route():
    data = request.get_json()
    append_file_text_req = str(data['append_file_text'])
    
    result = append_file(append_file_text_req)
    
    return jsonify({
        "result": result
    })
    
@home.route('/api/delete_file', methods=['POST'])
def delete_file_route():
    data = request.get_json()
    
    delete_file_name_req = str(data['delete_file'])
    
    result, status = delete_file(delete_file_name_req)
    
    return jsonify({
        "result": result,
        "status": status
    })
