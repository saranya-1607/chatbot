function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        displayMessage(message, 'user');
        setTimeout(() => botReply(message), 500); 
        userInput.value = '';
    }
}


function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}


function botReply(message) {
    let reply = '';

  
    if (message.toLowerCase().includes('hi')) {
        reply = 'Hello! 👋 How can I help you today?';
    } else if (message.toLowerCase().includes('how are you')) {
        reply = 'I’m just a bot, but I’m doing great! 😎';
    } else if (message.toLowerCase().includes('bye')) {
        reply = 'Goodbye! Have a great day! 😊';
    }
    else {
        reply = 'I didn’t get that. Can you ask something else? 🤔';
    }

    displayMessage(reply, 'bot');
}


document.getElementById('user-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
