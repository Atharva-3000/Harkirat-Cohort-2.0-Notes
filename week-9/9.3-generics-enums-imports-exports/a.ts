type keyInput = "up" | "down" | "left" | "right";

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

enum keyInputEnum {
    up = 10, //0
    down = 12,  //1
    left,  //2
    right  //2
}
function doSomething(keyPressed: keyInputEnum) {
    if (keyPressed === keyInputEnum.up) {
        console.log('a is pressed')
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
function identity<T>(arg: T) {
    return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(1);


function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

// const el = getFirstElement<string>(["harkiratSingh", "ramanSingh"]);
// console.log(el.toLowerCase())
// const el1 = getFirstElement<number>([1, 2, 3, 4]);
// const el2 = getFirstElement<boolean>([true, false]);
// const el3 = getFirstElement<string | number>(["harkiratSingh", 1]);

// you can also pass the type of the argument to the function


//importing
import a from './b';
import { app } from './b';