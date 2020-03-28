console.log("js on");

$(document).ready(() => {
  console.log("jq on");

  $(".js-form-calculator").on("submit", calcEquals);
  $(".js-btn-add").on("click", setModeAdd);
  $(".js-btn-subtract").on("click", setModeSubtract);
  $(".js-btn-multiply").on("click", setModeMultiply);
  $(".js-btn-divide").on("click", setModeDivide);
  $(".js-btn-clear").on("click", setModeDefault);
});

//
//  VARIABLES
//

let mode = null;

//
//  EVENT HANDLERS
//

function calcEquals(event) {
  event.preventDefault();
  console.log("CLICKED EQUALS");

  //  get inputs from DOM
  const numbersPackage = getNumbersFromDOM();

  //  send package to server
  sendCalcDetails(numbersPackage);

  setModeDefault(); // return mode to null
}

function setModeAdd() {
  console.log("CLICKED ADD");
  mode = "add";
}

function setModeSubtract() {
  console.log("CLICKED SUBTRACT");
  mode = "subtract";
}

function setModeMultiply() {
  console.log("CLICKED MULTIPLY");
  mode = "multiply";
}

function setModeDivide() {
  console.log("CLICKED DIVIDE");
  mode = "divide";
}

function setModeDefault() {
  // happens on clear and equals
  mode = null;
}

//
//  API INTERACTIONS
//

// //prettier-ignore
// function sendCalcDetails(send) {
//   // s
//   $.ajax({
//     method: 'POST',
//     url: '/add',
//     data: send,
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// }

/**
 * Sends data package to server for calculation.
 * @param {[number, number]} numPackage numbers in array to be sent for calculation
 */
// /*
function sendCalcDetails(numPackage) {
  console.log(numPackage);

  if (!mode) {
    console.log("MODE NOT SET. DID NOT SEND. FUNCTION: sendCalcDetails");
    alert("Please select an operator (+, -, *, /");
  }

  if (mode === "add") {
    $.ajax({
      method: "POST",
      url: "/add",
      data: numPackage
    })
      .then(response => {
        console.log(response);
        resetValues();
      })
      .catch(err => {
        console.log(err);
      });
  } else if (mode === "subtract") {
    $.ajax({
      method: "POST",
      url: "/subtract",
      data: numPackage
    })
      .then(response => {
        console.log(response);
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
        console.log(response);
        resetValues();
      })
      .catch(err => {
        console.log(err);
      });
  } else if (mode === "divide") {
    $.ajax({
      method: "POST",
      url: "/divide",
      data: numPackage
    })
      .then(response => {
        console.log(response);
        resetValues();
      })
      .catch(err => {
        console.log(err);
      });
  }
}
// */

//
//  FUNCTIONS
//

/**
 * @returns [number1, number2]   <-- from DOM input fields
 */
function getNumbersFromDOM() {
  // get values
  const num1 = Number($(".js-input-calcNum1").val());
  const num2 = Number($(".js-input-calcNum2").val());

  // pack values
  const numArr = [num1, num2];
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
  $(".js-input-calcNum2").val("");
}
