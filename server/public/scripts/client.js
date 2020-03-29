$(document).ready(() => {
  render();

  $(".js-form-calculator").on("submit", calcEquals);
  $(".js-btn-add").on("click", setModeAdd);
  $(".js-btn-subtract").on("click", setModeSubtract);
  $(".js-btn-multiply").on("click", setModeMultiply);
  $(".js-btn-divide").on("click", setModeDivide);
  $(".js-btn-clear").on("click", setVarsToDefault);

  $(".js-btn-0").on("click", btn0);
  $(".js-btn-1").on("click", btn1);
  $(".js-btn-2").on("click", btn2);
  $(".js-btn-3").on("click", btn3);
  $(".js-btn-4").on("click", btn4);
  $(".js-btn-5").on("click", btn5);
  $(".js-btn-6").on("click", btn6);
  $(".js-btn-7").on("click", btn7);
  $(".js-btn-8").on("click", btn8);
  $(".js-btn-9").on("click", btn9);
  $(".js-btn-dot").on("click", btnDot);

  $(".js-btn-clearHistory").on("click", clearHistory);
});

//
//  VARIABLES
//

let mode = null;
let result = 0;
let history = [];
let input = "";
let hasDot = false;

//
//  EVENT HANDLERS
//

function calcEquals(event) {
  event.preventDefault();
  // check for an operand
  if (!mode) {
    alert("Please select an operand");
    return;
  }

  //  get inputs from DOM
  const numbersPackage = getNumbersFromDOM();

  //  send package to server
  sendCalcDetails(numbersPackage);

  setVarsToDefault(); // return mode to null

  //  get results and History from server
  getResult();
}

function setModeAdd() {
  mode = "add";
  selectButtonCSS(this);

  input = $(".js-input-calcNum1").val();
  checkEmptyInput();
  input += "+";
  $(".js-input-calcNum1").val(input);
  hasDot = false;
}

function setModeSubtract() {
  mode = "subtract";
  selectButtonCSS(this);

  input = $(".js-input-calcNum1").val();
  checkEmptyInput();
  input += "-";
  $(".js-input-calcNum1").val(input);
  hasDot = false;
}

function setModeMultiply() {
  mode = "multiply";
  selectButtonCSS(this);

  input = $(".js-input-calcNum1").val();
  checkEmptyInput();
  input += "*";
  $(".js-input-calcNum1").val(input);
  hasDot = false;
}

function setModeDivide() {
  mode = "divide";
  selectButtonCSS(this);

  input = $(".js-input-calcNum1").val();
  checkEmptyInput();
  input += "/";
  $(".js-input-calcNum1").val(input);
  hasDot = false;
}

function setVarsToDefault() {
  // happens on clear and equals
  mode = null;
  input = "";
  history = [];
  result = 0;
  hasDot = false;

  selectButtonCSS(); //  clear selected button
  enableButtons();
}

// function checkValEmpty() {
//   if ($())
// }

function btn0() {
  input += "0";
  $(".js-input-calcNum1").val(input);
}

function btn1() {
  input += "1";
  $(".js-input-calcNum1").val(input);
}

function btn2() {
  input += "2";
  $(".js-input-calcNum1").val(input);
}

function btn3() {
  input += "3";
  $(".js-input-calcNum1").val(input);
}

function btn4() {
  input += "4";
  $(".js-input-calcNum1").val(input);
}

function btn5() {
  input += "5";
  $(".js-input-calcNum1").val(input);
}

function btn6() {
  input += "6";
  $(".js-input-calcNum1").val(input);
}

function btn7() {
  input += "7";
  $(".js-input-calcNum1").val(input);
}

function btn8() {
  input += "8";
  $(".js-input-calcNum1").val(input);
}

function btn9() {
  input += "9";
  $(".js-input-calcNum1").val(input);
}

function btnDot() {
  if (!hasDot) {
    input = $(".js-input-calcNum1").val();
    input += ".";
    $(".js-input-calcNum1").val(input);
  }
  hasDot = true;
}

//
//  API INTERACTIONS
//

/**
 * Sends data package to server for calculation.
 * @param {[number, number]} numPackage numbers in array to be sent for calculation
 */
function sendCalcDetails(numPackage) {
  if (!mode) {
    alert("Please select an operator (+, -, *, /");
  }

  if (mode === "add") {
    $.ajax({
      method: "POST",
      url: "/add",
      data: numPackage
    })
      .then(response => {
        // console.log(response);
        resetValues();
      })
      .catch(err => {
        // console.log(err);
      });
  } else if (mode === "subtract") {
    $.ajax({
      method: "POST",
      url: "/subtract",
      data: numPackage
    })
      .then(response => {
        // console.log(response);
        resetValues();
      })
      .catch(err => {
        console.log(err);
      });
  } else if (mode === "multiply") {
    $.ajax({
      method: "POST",
      url: "/multiply",
      data: numPackage
    })
      .then(response => {
        // console.log(response);
        resetValues();
      })
      .catch(err => {
        // console.log(err);
      });
  } else if (mode === "divide") {
    $.ajax({
      method: "POST",
      url: "/divide",
      data: numPackage
    })
      .then(response => {
        // console.log(response);
        resetValues();
      })
      .catch(err => {
        // console.log(err);
      });
  }
}

function getResult() {
  $.ajax({
    method: "GET",
    url: "/result"
  })
    .then(response => {
      result = Number(response);
      render(); // re-render page
      // console.log(
      //   `getResult: response: ${response}(string) result: ${result}(number/float)`
      // );
    })
    .catch(err => {
      // console.log(err);
    });
}

function getHistory() {
  $.ajax({
    method: "GET",
    url: "/history"
  })
    .then(response => {
      // console.log(response);
      history = response;
      renderHistory(); // Don't re render result
    })
    .catch(err => {
      // console.log(err);
    });
}

function clearHistory() {
  $.ajax({
    method: "DELETE",
    url: "/history"
  })
    .then(response => {
      console.log(response);
      getHistory();
    })
    .catch(err => {
      console.log(err);
    });
}

//
// RENDERS
//

function render() {
  $(".js-result").text(result);
  getHistory();
}

function renderHistory() {
  $(".js-history").empty();

  for (let pastCalc of history) {
    $(".js-history").prepend(`
    <li>${pastCalc.mathString}=${pastCalc.result}</li>
    `);
  }
}

//
//  FUNCTIONS
//

/**
 * @returns [number1, number2]   <-- from DOM input fields
 */
function getNumbersFromDOM() {
  // get values
  const calcScreen = $(".js-input-calcNum1").val();
  console.log(calcScreen);

  const holdArr = calcScreen.split(/[+/*-]/); //  split by +, -, *, or /      I have no idea how regex work
  const [num1, num2] = holdArr;
  console.log(num1, num2);

  // pack values
  const numArr = [Number(num1), Number(num2)];
  const dataPack = { numbers: numArr };

  // return package
  return dataPack;
}

/**
 * Resets input values.
 * Call this when everything worked and the send to the server was successful
 */
function resetValues() {
  $(".js-input-calcNum1").val("");
}

function selectButtonCSS(element) {
  $(".js-btn-add").removeClass("selected");
  $(".js-btn-subtract").removeClass("selected");
  $(".js-btn-multiply").removeClass("selected");
  $(".js-btn-divide").removeClass("selected");

  $(".js-btn-add").prop("disabled", true);
  $(".js-btn-subtract").prop("disabled", true);
  $(".js-btn-multiply").prop("disabled", true);
  $(".js-btn-divide").prop("disabled", true);

  $(element).addClass("selected");
}

function enableButtons() {
  $(".js-btn-add").prop("disabled", false);
  $(".js-btn-subtract").prop("disabled", false);
  $(".js-btn-multiply").prop("disabled", false);
  $(".js-btn-divide").prop("disabled", false);
}

function checkEmptyInput() {
  if (!input) {
    input = "0";
  }
}
