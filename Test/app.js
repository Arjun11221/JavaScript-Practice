// async function foo(){
//     return "Hello World";
// }
// const result = foo();
// console.log(result.then(res => console.log(res)));

// console.log([1,2]==[1,2]);   //false

// const arr = [0, 2, 3, 4, 6, 7];

// const arr1 = arr.filter((num) => num < 4).map((n) => n + 5);
// console.log(arr1);

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]==i) console.log(arr[i]);
// }

const str = "hi i am arjun";

const newStr = str
  .split(" ")
  .map((num) => num[0].toUpperCase() + num.slice(1, num.length));

console.log(newStr);
