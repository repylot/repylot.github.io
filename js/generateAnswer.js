const apiUrl = 'https://jsonplaceholder.typicode.com/users/';

var i = 1;

function fetchData() {
    fetch(apiUrl + i++)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            createBotChatEntry(data.name);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').textContent = 'Failed to load data';
        });
}


function createBotChatEntry(generatedMessage) {
    const chatBox = document.getElementById('chat-box');

    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'bot-message');
    
    newMessage.innerHTML = `<p>${generatedMessage}</p>`;
    
    chatBox.appendChild(newMessage, generatedMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}


function createUserChatEntry(messageText) {
    const chatBox = document.getElementById('chat-box');

    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'user-message');
    newMessage.innerHTML = `<p><i class="fas fa-pencil-alt edit-button" onclick="editMessage(this)"></i>${messageText}</p>`;

    chatBox.appendChild(newMessage, messageText);
    chatBox.scrollTop = chatBox.scrollHeight;

}


function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        createUserChatEntry(messageText);
        messageInput.value = "";

        fetchData();
    }
}

document.getElementById('send-button').addEventListener('click', sendMessage);

// Send message when pressing "Enter"
document.getElementById('message-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    createBotChatEntry('Hello! What would you like me to code today?');
});
