function setupSaveHoverEffect(button) {
    button.classList.add('edit-button');
    button.classList.remove('save-button');

    button.classList.add('fa-pencil-alt');
    button.classList.remove('fa-check-circle');

    button.addEventListener('click', editMessage(this))
}

document.getElementById('save-button').addEventListener('click', setupSaveHoverEffect);