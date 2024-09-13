// add something inside the variales;

// var ausername ='Shubham ';
// for (let i = 0; i<= 5; i++){
//     ausername = 'Shubham Pandey' //want to add pandey with shubham 
//     console.log(i, ausername);

// }

//////
// remove the last name inside the variable.
// var username = 'shubham pandey'

// for ( let i = 0; i<= 5; i++) {
//     let firstName = username.split(' ')[0];
//     console.log(i,firstName);

// }

////Hoisting the variables

// console.log(username)
// let username = 'shubham';

 

// let result = Hero(4, 6);

// function Hero( a, b) {
//     return a + b;
// }
// console.log(result);

////////////11

Hi();

// function definition
//function declaration
function Hi() {
    console.log('Hello');
}


////
// sayHi();

// function definition
// function Expression
let sayHi = function(){
    console.log('Hiiii');
}

//////

const x = 1;
{
    console.log(x);   // referenceError
    // const x = 2;
}

//////

if ("y" === " ") {
    const y = 3;
}
// console.log(y);  // referenceError

////

if (true) {
    var z = 5;

}
console.log(z);








