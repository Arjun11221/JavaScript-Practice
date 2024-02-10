// var localVar = 10; // localVar has global scope

// function myFunction() {
//     var localVar = 10; // localVar has local scope
//     console.log(localVar);
// }

// myFunction();

// console.log(localVar);

// let blockVar = 20;

// if (true) {
//     let blockVar = 20; // blockVar has block scope
//     console.log(blockVar);
// }

// console.log(blockVar); // This will result in an error since blockVar is not accessible outside the block.

function x() {
  var a = 110;
  function y() {
    var b = 20;
    console.log(a);
    function z() {
      console.log(b);
    }
    return z;
  }

  return y;
}
var p = x();
var m =  p();
// console.log(m);
m();

