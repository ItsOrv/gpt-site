document.addEventListener('DOMContentLoaded', () => {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbot = document.getElementById('chatbot');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    chatbot.textContent = 'AI: Hello, how can I assist you?';

    sendButton.addEventListener('click', async () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            const messageElement = document.createElement('p');
            messageElement.textContent = `You: ${userMessage}`;
            chatbotContainer.appendChild(messageElement);

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            const botMessageElement = document.createElement('p');
            botMessageElement.textContent = `AI: ${data.response}`;
            chatbotContainer.appendChild(botMessageElement);

            userInput.value = '';
        }
    });

    userInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
