// function z() {
//   var b = 100;
//   function x() {
//     var a = 10;
//     function y() {
//       console.log(a);
//       console.log(b);
//     }
//     y();
//   }
//   x();
// }
// z();

function a() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("hello World");
}

a();
