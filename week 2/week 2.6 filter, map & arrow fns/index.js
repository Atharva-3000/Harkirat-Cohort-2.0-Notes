// arrow functions

// function sum(a,b){
//     return a+b;
// }

// const sum = (a,b)=>{
//     return a+b;
// };

// const ans = sum(1,2);
// console.log(ans);

//              MAP
// GIVEN AN ARRAY GIVE ME BACK A NEW ARRAY IN WHICH EVERY VALUE IS MULTIPLIED BY 2

const input = [1, 2, 3, 4, 5, 6, 7];

//              MAP solution
// function transform(i){
//     return i*2;
// }

// const answer =input.map(transform);
// console.log(answer);

// even clearer syntax

const ans = input.map(function (i) {
  return i * 2;
});
console.log(ans);

// filtering
// given an input, give me back all the even values from it.

//              FILTER
function filterLogic(n) {
  return n % 2 == 0 ? true : false;
}

const ans1 = input.filter(filterLogic);
console.log(ans1);

// OR even more syntactical sugar

const ans2 = input.filter((value) => {
  return value % 2 == 0 ? true : false;
});

console.log(ans2);