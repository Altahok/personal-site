// Модальное Окно
const modal = document.getElementById("myModal");
const btn = document.getElementById("helpLink");
const closeBtn = document.getElementById("closeBtn");

// Открытие окна
btn.onclick = function () {
    modal.style.display = "block";
}

// Закрытие окна через крестик
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Закрытие окна через нажатие на пустое место
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}