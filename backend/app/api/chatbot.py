from flask import Blueprint, request, jsonify
from ..models.model import get_response

chatbot_bp = Blueprint('chatbot', __name__)

@chatbot_bp.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')
    response = get_response(user_message)
    return jsonify({'response': response})
