//===============================
// БУРГЕР-МЕНЮ
//===============================
//получаем элементы
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

//проверяем существуют ли элементы
if (burger && nav) {

    //при клике открываем/закрываем меню
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}