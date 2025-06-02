var newLine = true; //Boolean variables. Determines if the next thing the user types should be on a new line
var value1;
var currentOperator;

// Event handler for when the user any digit is pressed
function digitBtnPressed(button) {
  if (newLine) {
    document.getElementById("inputBox").value = button;
    newLine = false;
  } else {
    var currentValue = (document.getElementById("imputBox").value =
      currentValue + button);
  }
}

//Event handler for when the AC is pressed
function btnACPressed() {
  document.getElementById("inputBox").value = 0;
  newLine = true;
}

//Event handler for operator buttons
function operatorBtnPressed(operator) {
  currentOperator = operator;
  value1 = parseInt(document.getElementById("inputBox").value);
  newLine = true;
}

//Event handler for equals to buttons
function equalsBtnPressed() {
  var value2 = parseInt(document.getElementById("inputBox").value);
  var finalsTotal;

  switch (currentOperator) {
    case "+":
      finalsTotal = value1 + value2;
      break;
    case "-":
      finalsTotal = value1 - value2;
      break;
    case "/":
      finalsTotal = value1 / value2;
      break;
    case "x":
      finalsTotal = value1 * value2;
      break;
  }
  document.getElementById("inputBox").value = finalsTotal;
  value1 = 0;
  newLine = true;
}
