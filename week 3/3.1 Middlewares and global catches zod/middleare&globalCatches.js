const express = require("express");
const app = express();
// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//     // UGLY WAY OF DOING AUTHENTICATION

//     if (username != "atharva" || password != "pass") {
//         // early return on wrong input, rather than doing computation for right one
//       res.status(400).json({ msg: "Something's up with your input" });
//       return
//     }

//     // if (kidneyId == 1 || kidneyId == 2) {
//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({ msg: "Something's up with your input" });
//         return
//     }
//       res.json({
//         msg: "Your kidney is fine!",
//       });
//     }
// );
app.use(express.json());
app.post(
  "/health-checkup",
  function (req, res, next) {
    // console.log("Hi from req1");
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("you have" + kidneyLength + "kidneys");
  }
  // function (req, res) {
  //   console.log("Hi from req2");
  // }
);
// app.post("/putting", (req, res) => {
//   const title = req.body.title;
//   res.status(200).send({ title: title });
// });

// global catches: another type of middleware
// this will get called after all the above routes, if there are any exceptions, control is sent to this
// takes 4 inputs and not 3
// an error handling middleware

app.use(function (err, req, res, next) {
  res.json({
    msg: "Sorry, something is up with our servers.!",
  });
});

app.listen(3000);
