document.addEventListener('DOMContentLoaded', function() {
    startTimer(); // Inicia el temporizador automáticamente
});

let timerInterval;
let totalSeconds = 600; // 10 minutos en segundos

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Actualiza el temporizador inmediatamente al iniciar
}

function updateTimer() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    totalSeconds--;

    if (totalSeconds < 0) {
        clearInterval(timerInterval);
        alert('¡Tiempo de calentamiento terminado!');
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    totalSeconds = 600; // Reinicia a 10 minutos
    document.getElementById('minutes').textContent = '10';
    document.getElementById('seconds').textContent = '00';
}
