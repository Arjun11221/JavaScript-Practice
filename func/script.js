// // function statement(function declaration)
// a();
// function a(){
//     console.log("a Called");
// }


// // function expression

// let b = function (){
//     console.log("b Called");
// }
// b();

// //  anonymous function --> A function without any name is called anonymous function.

// // function (){
    
// // }


// // Named function expression..

// const x = function y(){
//     console.log('y Called');
// }

// x();
// // if we do 
// // y(); --> got an error




let arr = [1,2,3,4,5];
// console.log(arr.length);

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

for(let i = 0 , j = arr.length-1; i<=j; i++,j--){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
