const container = document.querySelector('.container');
const signUpButton = document.getElementById('signUp');
const readySignUpButton = document.getElementById('sign-up-ready');
const signInButton = document.getElementById('signIn');


signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

readySignUpButton.addEventListener('click', () => {
    window.location.href = 'home.html';
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
