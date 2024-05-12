// let x:number=1;
// x=12;
// console.log(x);

// functions
// function greet(firstName:string){
//     console.timeLog("Hello"+firstName);
// }
// greet("Atharva"); 

// function sum(a:number,b:number):number{
//     return a+b;
// }
// console.log(sum(1,2));

// function runAfter15(fn:()=>void)    {
//     setTimeout(fn,1000);
// }

// runAfter15(function(){
//     console.log("Hello");
// })


// interfaces
// interface User{
//     firstName:string;
//     lastName:string;
//     age:number;
//     email?:string;
// }


// function isLegal(user:User):boolean{
//     if(user.age>18){
//         return true;
//     }
//     return false;
// }

// isLegal({
//     firstName:"Atharva",
//     lastName:"Deshmukh",
//     age:20,
//     email:''
// })

// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }


//                  Class

// class Employee implements Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// const e=new Employee("Atharva",20);
// console.log(e.greet("Hello, I am "));


//              Types
// type User = {
//     firstName:string;
//     lastName:string;
//     age:number;
// }

// interface User2{
//     firstName:string;
//     lastName:string;
//     age:number;
// }

// function isLegal(user:User){
    
// }


//              UNIONS
// type GreetArg = number | string;
// function greet(id:GreetArg){
//     console.log(id);
// }
// greet(1);
// greet("1");

// type Employee={
//     name:string;
//     startDate:Date;
// };
// interface Manager{
//     name:string;
//     department:string;
// };

// type TechLead = Employee | Manager;
// const t:TechLead={
//     name:"Atharva",
//     startDate:new Date(),
//     department:"Navigation"
// }

//  Arrays in Typescript
// function maxValue(arr:number[]):number{
//     return Math.max(...arr);
// }

// interface User{
//     firstName:string;
//     lastName:string;
//     age:number;
// }

// function filteredUsers(users:User[]){
//     return users.filter(user=>user.age>18);
// }

// console.log(filteredUsers([{
//     firstName:"Atharva",
//     lastName:"Deshmukh",
//     age:20
// },{
//     firstName:"Jeet",
//     lastName:"Dhabre",
//     age:17
// },]));


interface Animal{
    name:string;
    age:number;
    speak:()=>void;
}

class Mammal implements Animal{

}


class Fishy implements Animal{
    
}