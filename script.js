// var myName = "Avi";
// console.log("Hello World");
// var newString = "My Name is - " + myName;
// var myNumber = 10 + 20;
// myNumber = myNumber + 20;
// var flag = true; //false
// console.log(newString);
// console.log(myNumber);

// Single Line comment -

/*
Hi 
This 
Is MY Multi line
Comment
*/

// In Built Fncs?
// Alerts -
// myFnc()

// alert("Today is your last class for F1 :)");
// Prompt - if the user clicks OK -> the value will be stored in the variable - string
// If the user clicks cancel -> the variable will be null

// var ans = prompt("Please Enter your name");
// if (ans != null) {
//   alert("Answer to the prompt - " + ans);
// } else {
//   alert("Got Null");
// }

// Confirm gives a boolean
// var ans = confirm("This website trakcs your data, click Yes to proceed");
// if (ans) {
//   alert("You clicked on okay");
// } else {
//   alert("You clicked on cancel");
// }

// var myName = "Avi";
// var job = "instructor";
// console.log("Hi" + myName);
// console.log("Hi", " ", myName, job, 5, true);

// undefined , undeclared, null

// declaration?

// // console.log(pi);
// const pi = 3.14;
// // const pi = 22 / 7;

// var number1;
// let number2;

// number1 = 30;
// number2 = 50;
// // number3 = 10;
// console.log(number1, number2);

// let vs var

// 1st difference - Scopes - Var has a global scope

// var x = 10;

// function myFnc() {
//   x = 20;
//   console.log(x);
// }

// myFnc();
// console.log(x);

// Versions - ES5, ES6

// let y = 10;

// function myFnc2() {
//   y = y + 20;
//   console.log(y);
//   //   y = 20,
// }

// myFnc2();
// console.log(y);

// var x; // declaring
// var x = 10; // defining || initialising
// Hoisting -
// sayHello();
// console.log(x);

// function sayHello() {
//   console.log("Say Hello");
// }

// var x = 10;
// console.log(x);
// sayHello();
// const and let = no hoisting
// var and fnc = hoisting

// var x = 10;
// var x = 20;

const myName = "Avi";
const myJob = "Instructor";
const myLocation = "New Delhi";

// " " = ' '
// ` `

console.log(
  "My name is " + myName + " I am an " + myJob + " I live in " + myLocation
);

// String interploation
console.log(`My name is ${myName}. I am an ${myJob}. I live in ${myLocation}`);
console.log(
  ` THIS IS STRING - Hi How are you\n ${returnName()} <- This was js`
);

function returnName() {
  return true;
}

function calculateGDP() {
  // complex maths stuff
  // 1
  // 2
  // 3
  // 4
  let gdp = "$100 Billion";
  //   console.log(gdp);
  return gdp;
}

// const ans = calculateGDP();
// console.log(calculateGDP());
// console.log(calculateGDP);

// Temporal Dead Zone -

// console.log(abc);
// if(abc=="Hello")

// var abc = "Hello";
// if(abc=="Hello")

// Var, Let and Const

// var is ES5, let is ES6
// let -> block scope. var -> global scope
// let -> doesnt support hoisting, var -> supports hoisting
// let cannot be redeclared, var -> can be redeclared
