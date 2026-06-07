// Переключатель работает как навигация между двумя отдельными версиями главной страницы.
const themeButton = document.getElementById("themeToggle");
const storageKey = "gamesadyg-theme";

const currentFile = window.location.pathname.split("/").pop().toLowerCase() || "index.html";
const isLightPage = currentFile === "index_light.html";
const isDarkPage = currentFile === "index.html";

// На главной всегда принудительно темная версия, чтобы она открывалась по умолчанию корректно.
if (isDarkPage) {
    document.body.classList.remove("light-theme");
    localStorage.setItem(storageKey, "dark");
}

// На отдельной светлой странице всегда включаем светлую тему.
if (isLightPage) {
    document.body.classList.add("light-theme");
    localStorage.setItem(storageKey, "light");
}

if (themeButton) {
    themeButton.textContent = isLightPage ? "Темная тема" : "Светлая тема";

    themeButton.addEventListener("click", () => {
        if (isLightPage) {
            localStorage.setItem(storageKey, "dark");
            window.location.href = "index.html";
            return;
        }

        localStorage.setItem(storageKey, "light");
        window.location.href = "index_light.html";
    });
}