// express is like a doctor as they provide services
// single threaded
// used to create an http server

// creating an http server
// it is a node library

const express = require("express");

// function summer(n) {
//   let ans = 0;
//   for (let i = 1; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

const app = express();
// app.get("/", function (req, res) {
//   const n = req.query.n;
//   const ans = summer(n);
//   res.send("Hi, your answer is: " + ans);
//   // res.send("Hi there!");
// });

const users = [
  {
    name: "Atharva",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

// the thing that you send for get is:
// QUERY PARAMETERS in url
app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys += 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    johnKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

// we send data in the body to be posted.
// we need middlewares for parsing
app.use(express.json());
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Success !",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
    newKidneys.push({
      healthy: true,
    });
  }
  users[0].kidneys = newKidneys;
  res.json({
    msg: "Success !",
  });
});

app.listen(3000);
