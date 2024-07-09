let timerInterval;
document.addEventListener('DOMContentLoaded', async function () {
    await configuration();
});

async function configuration() {
    const sitConfig = JSON.parse(localStorage.getItem('sitConfig'));

    const numCycles = sitConfig.numCycles;
    const warmupTime = sitConfig.warmupTime;
    const sprintTime = sitConfig.sprintTime;
    const restTime = sitConfig.restTime;

    //First Warmup time
    await startTimer(warmupTime, 'Calentamiento');

    for (let i = 0; i < numCycles; i++) {
        await startTimer(sprintTime, 'Sprint');
        await startTimer(restTime, 'Descanso');
    }

    window.location.href = 'index.html';
}

function startTimer(timer, windowText) {
    return new Promise(resolve => {
        // Configurar el temporizador
        updateTimerDisplay(timer);
        updateTimerLabel(windowText);

        let timerInterval = setInterval(() => {
            timer--;
            updateTimerDisplay(timer);

            if (timer === -1) {
                clearInterval(timerInterval);
                resolve();
            }
        }, 1000);
    });
}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;

    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = remainderSeconds.toString().padStart(2, '0');
}

function updateTimerLabel(label) {
    document.getElementById('label-timer').textContent = label;
}
