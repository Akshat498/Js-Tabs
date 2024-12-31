document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.tab-button.active').classList.remove('active');
        document.querySelector('.tab-content.active').classList.remove('active');

        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});