function editMessage(editIcon) {
    console.log('ok');
    const messageParagraph = editIcon.parentElement;
    const messageDiv = messageParagraph.parentElement;

    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    messageDiv.innerHTML = `<p><i class="fas fa-check-circle save-button" onclick="setupSaveHoverEffect(this)"></i>${messageText}</p>`;

    const chatBox = document.getElementById('chat-box');
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById('edit-button').addEventListener('click', editMessage);