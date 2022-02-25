var giftBtn = document.getElementById("hello");

function showGift() {
    giftBtn.style.opacity = 1;
}

// Функция позволяющая нам задать время в милисекундах для срабатывания другой функции 
setTimeout(showGift, 2000);