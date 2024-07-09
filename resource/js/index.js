// index.js

// Función para cambiar el tiempo (minutos o segundos)
function changeTime(id, increment) {
    const input = document.getElementById(id);
    let value = parseInt(input.value, 10);

    value += increment;

    if (value < 0) {
        value = 59;
    } else if (value > 59) {
        value = 0;
    }

    input.value = value.toString().padStart(2, '0');
}

// Función para cambiar el número de ciclos
function changeCycleCount(increment) {
    const input = document.getElementById('num-cycles');
    let value = parseInt(input.value, 10);

    value += increment;

    if (value < 1) {
        value = 1;
    } else if (value > 99) {
        value = 99;
    }

    input.value = value.toString();
}

// Función para configurar el Sprint Interval Training
function configureSIT() {
    startCountdown();
}

function startCountdown() {
    let countdown = 15;
    let countdownInterval = setInterval(function() {
        showPopup(`Configurando... Redirigiendo en ${countdown} segundos.`);
        countdown--;
        if (countdown < 0) {
            clearInterval(countdownInterval);
            redirectToTimerPage();
            closePopup();
        }
    }, 1000);
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popup.style.display = 'block';
    popupMessage.textContent = message;
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function redirectToTimerPage() {
    window.location.href = "timer.html";
}

// Event listeners para botones de aumento y reducción
document.getElementById('sprint-minutes-inc').addEventListener('click', () => changeTime('sprint-minutes', 1));
document.getElementById('sprint-minutes-dec').addEventListener('click', () => changeTime('sprint-minutes', -1));
document.getElementById('sprint-seconds-inc').addEventListener('click', () => changeTime('sprint-seconds', 1));
document.getElementById('sprint-seconds-dec').addEventListener('click', () => changeTime('sprint-seconds', -1));

document.getElementById('rest-minutes-inc').addEventListener('click', () => changeTime('rest-minutes', 1));
document.getElementById('rest-minutes-dec').addEventListener('click', () => changeTime('rest-minutes', -1));
document.getElementById('rest-seconds-inc').addEventListener('click', () => changeTime('rest-seconds', 1));
document.getElementById('rest-seconds-dec').addEventListener('click', () => changeTime('rest-seconds', -1));

document.getElementById('num-cycles-inc').addEventListener('click', () => changeCycleCount(1));
document.getElementById('num-cycles-dec').addEventListener('click', () => changeCycleCount(-1));
