document.addEventListener('DOMContentLoaded', function() {
    const toggleOptions = document.querySelectorAll('.toggle-option');
    toggleOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove 'active' class from all options
            toggleOptions.forEach(opt => opt.classList.remove('active'));
            // Add 'active' class to the clicked option
            this.classList.add('active');
            
            // Implement your logic here for switching between Chat and Editor
            const selectedOption = this.getAttribute('data-option');
            if (selectedOption === 'chat') {
                document.querySelector('.chat-container').style.display = 'flex';
                document.querySelector('.editor-area').style.display = 'none';
                // Hide editor or perform other actions
            } else if (selectedOption === 'editor') {
                document.querySelector('.chat-container').style.display = 'none';
                document.querySelector('.editor-area').style.display = 'flex';
                // Show editor or perform other actions
            }
        });
    });
});
