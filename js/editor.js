function updateContent() {
    const editorTextarea = document.getElementById('editor-textarea');
    const text = editorTextarea.value;

    console.log(text);

    var highlightedText = text.replace(/(^|\s)(def\s)/g, '$1<span class="highlight-def">$2</span>');
    highlightedText = highlightedText.replace(/(^|\s)(class\s)/g, '$1<span class="highlight-class">$2</span>');
    highlightedText = highlightedText.replace(/(\()(self)(\)|,)/g, '$1<span class="highlight-self">$2</span>$3');
    highlightedText = highlightedText.replace(/(^|\s)(pass)(\s|\n)/g, '$1<span class="highlight-pass">$2</span>$3');

    const generatedDiv = document.getElementById('generated');
    console.log(highlightedText);
    generatedDiv.innerHTML = `<p>${highlightedText.replace(/\n/g, '<br>').replace(/\t/g, '<span class="tab-space"></span>')}</p>`;
}

document.getElementById('editor-area').addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        console.log(e.key);
        e.preventDefault(); // Prevent the default tab behavior

        // Get the start and end positions of the selected text
        const start = document.getElementById('editor-textarea').selectionStart;
        const end = document.getElementById('editor-textarea').selectionEnd;

        // Set the value of the textarea to the text before the selection,
        // then a tab character, then the text after the selection
        document.getElementById('editor-textarea').value = document.getElementById('editor-textarea').value.substring(0, start) + '\t' + document.getElementById('editor-textarea').value.substring(end);

        // Move the caret to after the inserted tab character
        document.getElementById('editor-textarea').selectionStart = document.getElementById('editor-textarea').selectionEnd = start + 2;
    }

    updateContent();
});
