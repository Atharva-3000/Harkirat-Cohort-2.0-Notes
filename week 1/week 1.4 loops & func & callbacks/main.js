// loops
// let ans=0;
// for(let i =1; i<=50;i++){
//     ans=ans+i;
// }
// console.log(ans);

// function
// ....

// callback function

// passing a function as an argument
// function sqaure(n){
//     return n*n;
// }
// function sumOfSquare(a,b){
//     const var1= sqaure(a);
//     const var2= sqaure(b);
//     return var1+var2;
// }

// console.log(sumOfSquare(32,44));

// let's add some variations
// function cube(n){
//     return n*n*n;
// }
// function sumOfSquare(a,b){
//     const var1= sqaure(a);
//     const var2= sqaure(b);
//     return var1+var2;
// }
// function sumOfCubes(a,b){
//     const var1= cube(a);
//     const var2= cube(b);
//     return var1+var2;
// }

// console.log(sumOfCubes(32,44));

// here's a proper callback function

function sumOfSomething(a,b,fn){
    const var1= fn(a);
    const var2= fn(b);
    return var1+var2;
}

console.log(sumOfSomething(12,23,function square(n){
    return n*n;
}));  //sqaure is an anonymous function