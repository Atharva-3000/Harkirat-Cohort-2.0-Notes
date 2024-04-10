// HIGH LEVEL
// function findSum(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += i;
//   }
//   return ans;
// }
// function findSumTill100() {
//   console.log(findSum(100));
// }
// // busy waiting
// function syncSleep() {
//   let a = 1;
//   for (let i = 0; i < 10000000000; i++) {
//     a++;
//   }
// }

// setTimeout(findSumTill100,2000);
// // syncSleep();
// // findSumTill100();
// console.log("Hello world!");

// const fs = require("fs"); //filesystem

// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data);
// });

// console.log("Hi, there");
// let a=0;
// for(let i=0; i < 10000000000; i++) {
//     a++;
// }
// console.log("Hi, there 2");

// function square(n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }

// function sumOfSomething(a, b, fn){
//     const val1= fn(a);
//     const val2= fn(b);
//     return val1 + val2;
// }

// sumOfSomething(1,2,cube);

// PROMISES are syntactical sugar that make this code slightly more readable
// cleaner way is to use PROMISES

//  ⚠️⚠️⚠️⚠️

// const fs = require("fs");

// // my own async function
// function readIt() {
//   console.log("inside readIt");
//   return new Promise(function (resolve) {
//     console.log("inside promise");
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       console.log("Before resolve");
//       resolve(data);
//     });
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// readIt().then(onDone);

// let d = new Promise(function (resolve) {
//   resolve("foo");
// });
// function callback() {
//   console.log(d);
// }
// d.then(callback);
// console.log(d);
// ⚠️⚠️⚠️⚠️
// the first thing given to resolve must be a fucntion, and the first thing given to the function must be resolve which can be written as anything like r, res, etc...

// ASYNC AWAIT
// Just syntactical sugar, still uses callbacks/promises under the hood
//  NORMAL SYNTAX
// function asyncFucntion(){
//     let p = new Promise(function(resolve){
//         resolve("Hello there");
//     });
//     return p;
// }

// function main(){
//     asyncFucntion().then(function(value){
//         console.log(value);
//     });
// }
// main();

//      WITH ASYNC

function asyncFucntion() {
  let p = new Promise(function (resolve) {
    // resolve("Hello there");
    setTimeout(function(){
        // do some async logic here
        resolve("Hello there");
    }, 3000);
  });
  return p;
}

async function main() {
    // no callbacks, no .then
  let value=await asyncFucntion();  //thread is waiting here .
  console.log("Hi there!");
  };
main();
console.log("after main");