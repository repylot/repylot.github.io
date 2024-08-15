document.getElementById('editor-area').addEventListener('keydown', function(e) {
    console.log(e);
    if (e.key === 'Tab') {
        e.preventDefault(); // Prevent the default tab behavior

        // Get the start and end positions of the selected text
        const start = document.getElementById('editor-textarea').selectionStart;
        const end = document.getElementById('editor-textarea').selectionEnd;

        // Set the value of the textarea to the text before the selection,
        // then a tab character, then the text after the selection
        document.getElementById('editor-textarea').value = document.getElementById('editor-textarea').value.substring(0, start) + '\t' + document.getElementById('editor-textarea').value.substring(end);

        // Move the caret to after the inserted tab character
        document.getElementById('editor-textarea').selectionStart = document.getElementById('editor-textarea').selectionEnd = start + 1;
    }
});
