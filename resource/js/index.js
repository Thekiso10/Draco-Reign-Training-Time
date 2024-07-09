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

function configureSIT() {
    const sprintTime = getTimeValues('sprint');
    const restTime = getTimeValues('rest');
    const numCycles = parseInt(document.getElementById('num-cycles').value);

    // Guardar la configuración en localStorage
    const sitConfig = {
        sprintTime: sprintTime,
        restTime: restTime,
        numCycles: numCycles,
        warmupTime: 600 // Tiempo de calentamiento fijo en 10 minutos (600 segundos)
    };

    localStorage.setItem('sitConfig', JSON.stringify(sitConfig));

    startCountdown();
}

function getTimeValues(idPrefix) {
    const minutes = parseInt(document.getElementById(`${idPrefix}-minutes`).value);
    const seconds = parseInt(document.getElementById(`${idPrefix}-seconds`).value);
    return minutes * 60 + seconds; // Convertir todo a segundos
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
