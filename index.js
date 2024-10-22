const display = document.getElementById("display");

function ingresarAlDisplay(input) {
  display.value += input;
}

function eliminarDisplay() {
  display.value = "";
}

function calcularValores() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
