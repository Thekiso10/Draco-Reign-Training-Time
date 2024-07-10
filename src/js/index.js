import { TIMER_DURATION, LOCAL_STORAGE } from '../const/config'
import { changeCycleCount, changeTime } from './functions/panelTime.js'

document.addEventListener('DOMContentLoaded', function () {
    loadConfig();
});

window.changeCycleCount = changeCycleCount;
window.changeTime = changeTime;

window.configureSIT = function () {
    const sprintTime = getTimeValues('sprint');
    const restTime = getTimeValues('rest');
    const numCycles = parseInt(document.getElementById('num-cycles').value);

    // Guardar la configuración en localStorage
    const sitConfig = {
        sprintTime: sprintTime,
        restTime: restTime,
        numCycles: numCycles,
        warmupTime: TIMER_DURATION.countdown // Tiempo de calentamiento fijo en 10 minutos (600 segundos)
    };

    localStorage.setItem(LOCAL_STORAGE.nameStorage, JSON.stringify(sitConfig));

    startCountdown();
}

function loadConfig() {
    const sitConfig = JSON.parse(localStorage.getItem(LOCAL_STORAGE.nameStorage));

    if (sitConfig) {
        document.getElementById('sprint-minutes').value = String(Math.floor(sitConfig.sprintTime / 60)).padStart(2, '0');
        document.getElementById('sprint-seconds').value = String(sitConfig.sprintTime % 60).padStart(2, '0');
        document.getElementById('rest-minutes').value = String(Math.floor(sitConfig.restTime / 60)).padStart(2, '0');
        document.getElementById('rest-seconds').value = String(sitConfig.restTime % 60).padStart(2, '0');
        document.getElementById('num-cycles').value = sitConfig.numCycles;
    }
}

function getTimeValues(idPrefix) {
    const minutes = parseInt(document.getElementById(`${idPrefix}-minutes`).value);
    const seconds = parseInt(document.getElementById(`${idPrefix}-seconds`).value);
    return minutes * 60 + seconds; // Convertir todo a segundos
}

function startCountdown() {
    let countdown = TIMER_DURATION.countdown;
    let countdownInterval = setInterval(function() {
        showPopup(`El entranamiento va a empezar en ${countdown} segundo/s.`);
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
    window.location.href = "src/pages/timer.html";
}