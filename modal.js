// Модальное Окно "ПОМОЩЬ"
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

// // Закрытие окна через нажатие на пустое место
// window.onclick = function (event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// }

    

// Модальное окно "ВОЙТИ"
const modalEnt = document.getElementById("enter-wrapper");
const btnEnter = document.getElementById("enterLink");
const  closeEnter = document.getElementById("closeEnter");

// Открытие окна
btnEnter.onclick = function () {
    modalEnt.style.display = "block";
}

// Закрытие крестиком
closeEnter.onclick = function () {
    modalEnt.style.display = "none";
}

// // Закрытие на пустое место
// window.onclick = function (event) {
//     if (event.target === modal) {
//         modalEnt.style.display = "none";
//     }
// }




// Закрытие через кнопку отправить "Помощь"
const closebtns = document.getElementById("btnHelp");

closebtns.onclick = function (closed) {
    modal.style.display = "none";
    alert("Ваша заявка будет рассмотрена в течение 1 часа.")
}


// Закрытие через кнопку отправить "Авторизация"
const endButton = document.getElementById("endCl");

endButton.onclick = function () {
    modalEnt.style.display = "none";
    alert("Вы успешно авторизировались!")   ;
}


// Модальное окно приветствие

const modalHello = document.getElementById('hello')
const closeHello = document.getElementById('closeHello')

// Закрытие крестиком
closeHello.onclick = function () {
    modalHello.style.display = "none";
}