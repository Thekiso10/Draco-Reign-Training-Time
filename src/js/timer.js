import { TIMER_DURATION, LOCAL_STORAGE, TEXT_TIMER } from '../const/config'

document.addEventListener('DOMContentLoaded', async function () {
    await configuration();
});

async function configuration() {
    const sitConfig = JSON.parse(localStorage.getItem(LOCAL_STORAGE.nameStorage));

    const numCycles = sitConfig.numCycles;
    const warmupTime = sitConfig.warmupTime;
    const sprintTime = sitConfig.sprintTime;
    const restTime = sitConfig.restTime;

    //First Warmup time
    await startTimer(warmupTime, TEXT_TIMER.warmup);

    for (let i = 0; i < numCycles; i++) {
        await startTimer(sprintTime, TEXT_TIMER.sprint);
        await startTimer(restTime, TEXT_TIMER.rest);
    }

    window.location.href = '../../index.html';
}

function startTimer(timer, windowText) {
    return new Promise(resolve => {
        // Configurar el temporizador
        updateTimerDisplay(timer);
        updateTimerLabel(windowText);

        let timerInterval = setInterval(() => {
            timer--;
            updateTimerDisplay(timer);

            if (timer <= TIMER_DURATION.startPulse && timer > TIMER_DURATION.finishTime) {
                document.body.classList.add('pulse');
            } else if (timer === TIMER_DURATION.finishTime) {
                clearInterval(timerInterval);
                document.body.classList.remove('pulse');
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