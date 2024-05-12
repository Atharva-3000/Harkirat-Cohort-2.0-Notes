"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lets make the type more readable by using enums rather tahn constant strings
// enum keyInputEnum{
//     up, //0
//     down,  //1
//     left,  //2
//     right  //2
// }
// or
// enum keyInputEnum{
//     up="UP",
//     down="DOWN",  //1
//     left="LEFT",  //2
//     right="RIGHT"  //2
// }
// or
var keyInputEnum;
(function (keyInputEnum) {
    keyInputEnum[keyInputEnum["up"] = 10] = "up";
    keyInputEnum[keyInputEnum["down"] = 12] = "down";
    keyInputEnum[keyInputEnum["left"] = 13] = "left";
    keyInputEnum[keyInputEnum["right"] = 14] = "right"; //2
})(keyInputEnum || (keyInputEnum = {}));
function doSomething(keyPressed) {
    if (keyPressed === keyInputEnum.up) {
        console.log('a is pressed');
    }
    //
}
doSomething(keyInputEnum.up);
doSomething(keyInputEnum.down);
doSomething(keyInputEnum.left);
doSomething(keyInputEnum.right);
console.log(keyInputEnum.up);
console.log(keyInputEnum.down);
// coomon usecase
// const app=express();
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.NotFound).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })
// function express() {
//     throw new Error("Function not implemented.");
// }
//              GENERICS
// type Input= number | string;
// function firstEl(arr: Input[]){
//     return arr[0];
// }
// const value=firstEl(["Atharva","Deshmukh"]);
// console.log(value.toUpperCase()); //throws error because it can be number also
// or
//  const value1=firstEl(["Atharva",1,2,3]) wont throw any error by ts but it will throw error at runtime;
// to solve these problems we use generics
//  T means any type
// generics are used to make the function more flexible and reusable
// function identity<T>(arg:string | number){
//     return arg;
// }
// let output1= identity("myString");
// let output2= identity(1);
// or
function identity(arg) {
    return arg;
}
let output1 = identity("myString");
let output2 = identity(1);
function getFirstElement(arr) {
    return arr[0];
}
