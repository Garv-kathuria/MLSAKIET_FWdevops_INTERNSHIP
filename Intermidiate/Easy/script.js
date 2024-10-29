let display = document.getElementById("display");
let currentInput = "0";
let isNewInput = true;

function input(value) {
    if (isNewInput) {
        currentInput = value;
        isNewInput = false;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    isNewInput = true;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1) || "0";
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
    } catch {
        currentInput = "Error";
    }
    isNewInput = true;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}
