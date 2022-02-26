const btn3 = document.getElementById("askQ-btn");
const modal4 = document.getElementById("modal-wrapper");
const closeBt = document.getElementById("closeAskQ");

btn3.onclick = function () {
    modal4.style.display = "block";
}

closeBt.onclick = function () {
    modal4.style.display = "none";
}

// Закрытие на пустое место
window.onclick = function (event) {
    if (event.target === modal4) {
        modal4.style.display = "none";
    }
}

// Закрытие через кнопку отправить "Помощь"
const closebt = document.getElementById("askQ-submit");

closebt.onclick = function (closed) {
    modal4.style.display = "none";
    alert("Мы пришлём ответ в течение дня.")
}