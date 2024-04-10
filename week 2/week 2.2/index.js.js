// we will use an external library called express

// just search hello world in express and copy paste.

const express = require("express");
const port = 3000;
const app = express();
const bodyParser = require("body-parser");   //used to parse body
app.use(bodyParser.json());
app.post("/", function (req, res) {
    console.log(req.body)
  res.send("<h1>Hey</h1>");
});

// app.post("/conversations", function (req, res) {
// //   console.log(req.headers); to get all the headers
// console.log(req.body)
//   res.send({
//     msg: "2 + 2 = 4",
//   });
// });

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});