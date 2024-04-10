// add(2,5);

// function add(a,b){
//     console.log(a+b);
// }


// console.log(add(2,3));

// var add = (a,b)=>{
//     // console.log(a+b);
//     return a+b;
// }

// var glo = 10;

// function global(){
//     console.log(glo);
// }

// global();

// console.log(glo);


// let a = 20;

// function local(){
//     var a = 10;
//     console.log(a);
// }

// local();

// console.log(a);


// function a(){
//     var a = 10;
//     function b(){
//         var b = 20;
//         function c(){
//             console.log(a, b);
//         }
//         c();
//     }
//     b();
// }
// a();


if (true) {
    let blockVar = 'I am a block-scoped variable';
    console.log(blockVar); // Output: 'I am a block-scoped variable'
}
  
  console.log(blockVar); // Error: blockVar is not defined
  
