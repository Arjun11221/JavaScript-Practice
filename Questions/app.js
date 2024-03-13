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

function abc(str){
    let occ = {};
    str.split("").forEach((item)=>{
        if(occ.hasOwnProperty(item)===false){
            occ[item] = 1;
        }
        else {
            occ[item]++;
        }
    })
    return occ;

}

console.log(abc("abccsgavs"));
