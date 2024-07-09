// script.js

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
    const sprintMinutes = document.getElementById('sprint-minutes').value;
    const sprintSeconds = document.getElementById('sprint-seconds').value;
    const restMinutes = document.getElementById('rest-minutes').value;
    const restSeconds = document.getElementById('rest-seconds').value;
    const numCycles = document.getElementById('num-cycles').value;

    console.log(`Configuración: Sprint ${sprintMinutes}:${sprintSeconds}, Descanso ${restMinutes}:${restSeconds}, Ciclos ${numCycles}`);
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
