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

app.get("/history", (req, res) => {
  res.send(history);
});

//
// LISTEN
//
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
