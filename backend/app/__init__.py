from flask import Flask
from .api.chatbot import chatbot_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(chatbot_bp, url_prefix='/api')
    return app
