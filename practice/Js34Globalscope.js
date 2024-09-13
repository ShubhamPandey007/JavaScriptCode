// debugger;
// let and const is script scope, 
// window scope ,
const username = 'Shubham';
const age = 30;
var a = 50;

function add (){
     
     var x = 5
     const y = 7
     console.log(x + y)
     console.log(username); // we can access global variable inside the function 
}

console.log(x);  // x is not defined (error)

add()

console.log('Program Ended')