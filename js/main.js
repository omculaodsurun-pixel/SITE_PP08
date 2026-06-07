// Управление мобильным меню: открытие по бургеру и закрытие по клику на ссылку.
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

if (burger && nav) {
    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => nav.classList.remove("active"));
    });
}

// Автоматически подставляем текущий год во все футеры.
const yearNode = document.querySelector(".js-year");
if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
}

// Эффект появления секций при прокрутке.
const revealBlocks = document.querySelectorAll(".reveal");
if (revealBlocks.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    revealBlocks.forEach((block) => {
        if (!block.classList.contains("visible")) {
            revealObserver.observe(block);
        }
    });
}