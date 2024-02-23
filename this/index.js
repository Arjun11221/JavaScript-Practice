"use strict";

// this keyword in global scope
console.log(this);

// this keyword in function scope
function x() {
  console.log(this);
}
x();
window.x();

// this keyword inside an object

const obj1 = {
  name: "Arjun",
  age: 22,
  a: function () {
    console.log(this.name);
  },
};
obj1.a();

const obj2 = {
  name: "Karan",
};

obj1.a.call(obj2);

// this keyword in an arrow function

const obj3 = {
  a: 10,
  y: function(){
    const fn = () => {
      console.log(this.a);
    };
    fn();
  },
};

obj3.y();

// this keyword inside the dom

const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    console.log(this);
})


// call, apply and bind method

const student1 = {
    name : "Arjun",
    lastName : "Kumar",
    
}
const getFullName = function(area,stat){
    console.log(this.name + " " + this.lastName + " " + area + " ," + stat);
}
getFullName.call(student1 ,"Gzb","up");

const student2 = {
    name : "Sachin",
    lastName : "Tendulkar",
}

getFullName.call(student2 , "Mumbai" , "Maha");
getFullName.apply(student2 , ["Mumbai" , "Maha"]);
const myName = getFullName.bind(student2 , ["Mumbai" , "Maha"]);
console.log(myName);

myName();