const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 5000;

//
// MODULES
//

const history = require("./modules/history"); //  [ { mathString: '', result: 0 } ]

const coleMath = require("./modules/coleMath"); //  my math object

//
// ROUTES
//

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("server/public"));

app.get("/history", (req, res) => {
  res.send(history);
});

app.post("/history", (req, res) => {
  const newCalc = req.body; //  format { mathString: '', result: 0 }
  console.log(newCalc);
  history.push(newCalc);

  res.sendStatus(201);
});

//
// LISTEN
//
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
