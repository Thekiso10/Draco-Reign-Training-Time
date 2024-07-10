export function changeCycleCount(increment) {
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

export function changeTime(id, increment) {
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