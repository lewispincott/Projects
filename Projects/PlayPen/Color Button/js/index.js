function enterKeyChange() {
  if (event.keyCode == 13) {
   document.getElementById('color-btn').click();
  } else if (event.keyCode == 27) {
    document.getElementById('reset-btn').click();
  }
}

function changeColor() {
  var colorInput = document.getElementById("color-input");
  var colorButton = document.getElementById("color-btn");
  var resetButton = document.getElementById("reset-btn");
  
  resetButton.style.borderColor = colorInput.value;
  colorButton.style.backgroundColor = colorInput.value;
}

function resetColor() {
  var colorInput = document.getElementById("color-input");
  var colorButton = document.getElementById("color-btn");
  var resetButton = document.getElementById("reset-btn");
  
  colorInput.value = "";
  colorButton.style.backgroundColor = "white";
  resetButton.style.borderColor = "black";
}