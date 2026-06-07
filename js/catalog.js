// Элементы фильтрации каталога по жанрам.
const filterButtons = document.querySelectorAll(".filter__btn");
const catalogCards = document.querySelectorAll(".catalog__grid .card");
const filterToggle = document.getElementById("filterToggle");
const filterPanel = document.getElementById("filterPanel");

// При выборе жанра показываем только карточки с совпадающим data-genre.
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const genre = button.dataset.genre;

        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        catalogCards.forEach((card) => {
            const visible = genre === "all" || card.dataset.genre === genre;
            card.style.display = visible ? "block" : "none";
        });
    });
});

// На мобильных фильтр открывается и закрывается отдельной кнопкой.
if (filterToggle && filterPanel) {
    filterToggle.addEventListener("click", () => {
        filterPanel.classList.toggle("active");
    });
}

// Кнопка "Подробнее" раскрывает и скрывает мини-описание карточки.
document.querySelectorAll(".card__toggle").forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        card.classList.toggle("active");
    });
});