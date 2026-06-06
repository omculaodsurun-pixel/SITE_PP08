//Переключение светлой темы
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('light-theme');
    });
}