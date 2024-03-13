const express = require("express");
const app = express();

app.use(express.json());

// ZOD is a input validation library
// const schema = zod.array(zod.number());

// {
// email:string ->@ and stuff
// password: atleast 8 letters
// country: "IN"
// ,"US// }

// const schema2 = zod.object({
//   email: zod.string(),
//   password: zod.string(),
//   country: zod.literal("IN").or(zod.literal("US")),
//   kidneys: zod.array(zod.number())
// })

// app.post("/health-checkup", function (req, res, next) {
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys);
//   // const kidneyLength = kidneys.length;
//   res.send({
//     response
//   });
// });

// app.use(function (err, req, res, next) {
//   res.json({
//     msg: "Sorry, something is up with our servers.!",
//   });
// });

// app.listen(3000);

// if it as an array of number, return true, else false
const zod = require("zod");
function validateInput(obj) {
  // const schema = zod.array(zod.number());
  // const response = schema.safeParse(arr);
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schema.safeParse(obj);
  console.log(response);
}
// validateInput({
//   email: "123@gmail.com",
//   password: "23457623567",
// });

// {
// email:string ->@ and stuff
// password: atleast 8 letters
// country: "IN"
// ,"US// }
// const schema2 = zod.object({
//   email: zod.string().email(),
//   password: zod.string().min[8],
// });

app.post("/login",(req,res)=>{
  // const inputs = req.body;
  // check email and password
  const response=validateInput(req.body);
  if(!response){
    res.json({msg:"Your inputs are invalid"})
    return;
  }
  else{
    res.json({msg:"You are logged in successfully !"})
  }
})

app.listen(3000);