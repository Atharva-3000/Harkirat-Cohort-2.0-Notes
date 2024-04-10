// console.log("Hello World!");
// let var and const

// let a = 1;
// a = 2;
// console.log(a);

// let fName = "Atharva";
// let age = 20;
// let isMarried = false;

// console.log("This person's name is "+fName+ " And there age is "+age+" and hs is "+isMarried?"married":"not married");

// Objects
// const allUsers = [
//   {
//     firstName: "Atharva",
//     gender: "male",
//   },
//   {
//     firstName: "Mohnish",
//     gender: "male",
//     metadata:{
//         age:21,
//         address:"25 mig dd nagar"
//     }
//   },
//   {
//     firstName: "Priya",
//     gender: "female",
//   },
//   {
//     firstName: "Sakshi",
//     gender: "female",
//   },
// ];
// for(let i=0;i<allUsers.length;i++){
//     if(allUsers[i].metadata && allUsers[i].metadata.age === 21){
//         console.log(allUsers[i]);
//     }
// }

// FUNCTIONS
// function addTwo(a, b) {
//   return a + b;
// }
// const value = addTwo(3, 4);
// console.log(value);

//                      CALLBACKS

// callbacks: function being passed as a parameter to another function

// function sum(num1, num2, fnToCall){
//     let result = num1 + num2;
//     fnToCall(result);
// }
// function displayResult(data){
//     console.log("Result of the sum is: "+data);
// }
// function displayResultPassive(data){
//     console.log("Sum's result is: "+  data);
// }

// const ans= sum(1,2, displayResult);

// function final(a,b,type){
//     return type(a,b);
// }
// function sum(a, b){
//     return a+b;
// }
// function minus(a, b){
//     return a-b;
// }
// function multiply(a, b){
//     return a*b;
// }
// function divide(a, b){
//     return a/b;
// }

// console.log(final(32,21,multiply));

//          setTimeout
// function lateGreeter() {
//   console.log("Hello Atharva !");
// }
// setTimeout(lateGreeter, 3000);    ///is also a callback fucntion


//              setInterval
var i=0;
function counter(){
    console.log(i);
    i+=i;
}
while(i<=1000){
    setTimeout(counter,1000);
}
