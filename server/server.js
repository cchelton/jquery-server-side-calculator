const express = require("express");
const bodyParser = require("body-parser");
const coleMath = require("./modules/coleMath"); //  my math object

const app = express();

const PORT = 5000;

//
// VARIABLES
//

const history = require("./modules/history"); //  [ { mathString: '', result: 0 } ]
let result = 0;

//
// ROUTES
//

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("server/public"));

app.get("/history", (req, res) => {
  res.send(history);
});

app.post("/add", (req, res) => {
  //  perform addition and append history
  let data = req.body; // unpack data. data format { numbers: [num1, num2] }
  let [num1, num2] = data.numbers;

  num1 = Number(num1);
  num2 = Number(num2);

  const newMathString = `${num1}+${num2}`; //  prep for history
  const newResult = coleMath.add(num1, num2); //  calculate result

  result = newResult; //  change current result

  const newHistoryObject = coleMath.newHistObj(newMathString, newResult);
  history.push(newHistoryObject); //  append history w/ new calculation

  res.sendStatus(200);
});

app.post("/subtract", (req, res) => {
  //  perform subtraction and append history
  let data = req.body; // unpack data. data format { numbers: [num1, num2] }
  let [num1, num2] = data.numbers;

  num1 = Number(num1);
  num2 = Number(num2);
  const newMathString = `${num1}-${num2}`; //  prep for history
  const newResult = coleMath.sub(num1, num2); //  calculate result

  result = newResult; //  change current result

  const newHistoryObject = coleMath.newHistObj(newMathString, newResult);
  history.push(newHistoryObject); //  append history w/ new calculation

  res.sendStatus(200);
});

app.post("/multiply", (req, res) => {
  //  perform multiplication and append history
  let data = req.body; // unpack data. data format { numbers: [num1, num2] }
  let [num1, num2] = data.numbers;

  num1 = Number(num1);
  num2 = Number(num2);
  const newMathString = `${num1}*${num2}`; //  prep for history
  const newResult = coleMath.mul(num1, num2); //  calculate result

  result = newResult; //  change current result

  const newHistoryObject = coleMath.newHistObj(newMathString, newResult);
  history.push(newHistoryObject); //  append history w/ new calculation

  res.sendStatus(200);
});

app.post("/divide", (req, res) => {
  //  perform division and append history
  let data = req.body; // unpack data. data format { numbers: [num1, num2] }
  let [num1, num2] = data.numbers;

  num1 = Number(num1);
  num2 = Number(num2);
  const newMathString = `${num1}/${num2}`; //  prep for history
  const newResult = coleMath.div(num1, num2); //  calculate result

  result = newResult; //  change current result

  const newHistoryObject = coleMath.newHistObj(newMathString, newResult);
  history.push(newHistoryObject); //  append history w/ new calculation

  res.sendStatus(200);
});

app.get("/result", (req, res) => {
  res.send(result.toString());
});

//
// LISTEN
//

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
