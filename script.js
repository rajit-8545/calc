function calculate(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.substring(0, display.length - 1);
}

function calculateResult() {
    let display = document.getElementById("display").value;
    if (display) {
        document.getElementById("display").value = eval(display);
    }
}

function calculateSquare() {
    let display = document.getElementById("display").value;
    if (display) {
        document.getElementById("display").value = Math.pow(eval(display), 2);
    }
}

function calculateSquareRoot() {
    let display = document.getElementById("display").value;
    if (display) {
        document.getElementById("display").value = Math.sqrt(eval(display));
    }
}

function calculateCube() {
    let display = document.getElementById("display").value;
    if (display) {
        document.getElementById("display").value = Math.pow(eval(display), 3);
    }
}

function calculateCubeRoot() {
    let display = document.getElementById("display").value;
    if (display) {
        document.getElementById("display").value = Math.cbrt(eval(display));
    }
}
