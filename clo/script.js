// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// let z = x();

// console.log(z);
// z();

function x() {
  for (var i = 1; i <= 5; i++) {
    function y(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    y(i);
  }
}

x();
