// let str = prompt("What the name ? ")

// console.log(str);

// const newStr = str.split(" ").map((item) => {
//   const s = item[0].toUpperCase().slice(item) + item.slice(1);
//   return s;
// });
// console.log(newStr);

// let str = "Write the words ?";

// let newStr = str.split(" ").map((item)=>{
//     const i = item.split("").reverse().join("");
//     return i;
// })

// console.log(newStr.join(" "));

// function checkArr(ele){
//     return Array.isArray(ele);
// }

// console.log(checkArr([]));
// console.log(checkArr({}));

// How to empty an array?

// let arr = [1,2,3,4,5];

// // arr.length = 0;
// console.log(arr);

// // while (arr.length > 0) {
// //   arr.length = arr.length -1;
// // }
// while (arr.length > 0) {
//     arr.pop();
// }

// console.log(arr);

// function duplicate(arr){
//    return arr.concat(arr);
// }

// console.log(duplicate([1,2,3,4]));

// function reverseNum(num){
//     return Number(num.toString().split("").reverse().join(""));
// }

// console.log(reverseNum(12));

// let num = 12;

// let changeNum = Number(num.toString().split("").reverse().join(""));

// console.log(changeNum+2);

// let num = 1234;

// let rev = 0;
// while (num > 0) {
//   let rem = num % 10;
//   rev = rev * 10 + rem;
//   num = Math.floor(num / 10);
// }
// console.log(rev);

// let str = "nitin";

// let pal = str.split("").reverse().join("");

// if(pal===str){
//     console.log("String is Palindrome");
// }else{
//     console.log("String isn't Palindrome");
// }

// let str = "my name is arjun";

// const newStr = str.split(" ").map((item)=>{
//     return (item[0].toUpperCase() + item.substring(1));
// });
// const newArr = newStr.join(" ");

// console.log(newArr);

// let str = "apple";

// let obj = {};

// str.split("").map((e)=>{
//     if(obj.hasOwnProperty(e)===false){
//         obj[e] = 1;
//     }
//     else {
//         obj[e]++;
//     }
//     return obj;
// })

// console.log(obj);


// const arr = [1,2,3,4,5];

// let sum = 0;

// // for(let i = 0; i<arr.length; i++){
// //     sum += arr[i];
// // }

// arr.map((e)=>{
//     sum += e;
// })

// console.log(sum);


// const arr = ["asjc",12,"sdgvs","sbacxs",21,45,"aercx",10];

// let sum = 0;
// arr.forEach((elem)=>{
//     if(typeof elem === "number"){
//         sum += elem;
//     }
// });
// console.log(sum);

// const arr = [
//     {
//         name : "Arjun",
//         age : 20,
//         gender : "male"
//     },
//     {
//         name : "karan",
//         age : 20,
//         gender : "male"
//     },
//     {
//         name : "abc",
//         age : 20,
//         gender : "female"
//     },
//     {
//         name : "xyz",
//         age : 20,
//         gender : "female"
//     }
// ];

// let count = 0;
// arr.forEach((e)=>{
//     if(e.gender !== "male"){
//         count++;
//     }
// });

// for(let j = 0 ; j<=count; j++){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i].gender !== "male"){
//             arr.splice(i,1);
//         }
//     }
// }

// console.log(arr);


// const arr = [1,2,3,4];

// let newArr = arr.map((e)=>{
//     return e;
// });

// console.log(newArr);

// function arr(arr,n=1){
//     if(arr.length>=n){
//         for(let i = 0; i<n; i++){
//             console.log(arr[i]);
//         }
//     }
// }

// arr([1,2,3,4,5],5);

function arr(arr,n=1){
    if(arr.length>=n){
        for(let i = 0; i<n; i++){
            console.log(arr[arr.length-1-i]);
        }
    }
}

arr([1,2,3,4,5],2);