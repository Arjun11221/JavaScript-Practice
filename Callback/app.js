// setTimeout(function(){
//     console.log("timer");
// },4000);

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){       // here y is a callback function
//     console.log("y");
// })

function close() {
  let count = 0;
  document.getElementById("click").addEventListener("click", function xy() {
    console.log("Btn Clicked", ++count);
  });
}
close();