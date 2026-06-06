// ФИЛЬТР ПО ЖАНРАМ
const buttons = document.querySelectorAll('.filter__btn');
const cards = document.querySelectorAll('.catalog__grid .card');
const filterToggle = document.getElementById('filterToggle');
const filter = document.getElementById('filter');
// Фильтрация
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const genre = button.dataset.genre;

        cards.forEach(card => {
            if (genre === "all" || card.dataset.genre === genre) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Открытие фильтра на мобильной
if (filterToggle) {
    filterToggle.addEventListener('click', () => {
        filter.classList.toggle('active');
    });
}
// Открытие описания игры
const toggleButtons = document.querySelectorAll('.card__toggle');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        card.classList.toggle('active');
    });
});