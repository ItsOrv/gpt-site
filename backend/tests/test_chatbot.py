import unittest
from app import create_app

class ChatbotTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.client = self.app.test_client()

    def test_chat_response(self):
        response = self.client.post('/api/chat', json={'message': 'Hello'})
        json_data = response.get_json()
        self.assertIn('response', json_data)
        self.assertEqual(json_data['response'], "AI: Hello, how can I assist you?")

if __name__ == '__main__':
    unittest.main()
