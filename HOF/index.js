// const radius = [2, 3, 4, 5];

// const area = (radius) => {
//   return Math.PI * radius * radius;
// };
// const cir = (radius) => {
//   return 2 * Math.PI * radius;
// };
// const dia = (radius) => {
//   return 2 * radius;
// };

// Array.prototype.calculate = function(logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }
//   return output;
// };

// console.log(radius.map(area));

// console.log(radius.calculate(area));
// // console.log(cal(radius, cir));
// // console.log(cal(radius, dia));

// map reduce and filter

// const radius = [2, 3, 4, 5, 8, 1];

// const binary = (x) => {
//   return x.toString(2);
// };

// const output = radius.map(binary);

// console.log(output);


// const output = radius.filter((x)=>{
//    return x%3!=0;
// })

// console.log(output);

// function sum(){
//     let sum = 0;
//     for(let i = 0; i<radius.length; i++){
//         sum += radius[i];
//     }
//     return sum;

// }


// const output = radius.reduce((sum,val)=>{
//     sum += val;
//     return sum;
// },0);

// console.log(output);


const radius = [2, 3, 4, 5, 8, 1];


// const add = (radius)=>{
//     let sum = 0;
//     for(var i = 0; i<radius.length; i++){
//         sum += radius[i];

//     }
//     return sum;
// }

// console.log(add(radius));

const add = radius.reduce((arr,curr)=>{
    arr += curr;
    return arr;
},0);

console.log(add);