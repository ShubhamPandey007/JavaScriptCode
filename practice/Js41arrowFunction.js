//function Declaration

function square(num) {
    return num * num;
}

//function expression;  //sttore function in a variable.

const square1 = function (num){
    return num * num;
}

// arrow function expression

const user = () => {
    console.log("Shubham Pandey")

}
user();

/////////////
const user2 = (name) => {
    console.log(name)
}
user2("shivam pandey")

//////////////
     
const add = (a, b) => a + b;  //implicit return

const squareNum = num => num * num;

const random = () => (
    Math.floor(Math.random() * 10) + 1
)


// practice
//Arrow function..

let sayHello = (name) => 'Hello, ' + name;
console.log(sayHello('javascript!'));


//////
let language = {
    name: "JavaScript",
    javascript1:() => {
        console.log(`Hello, ${this.name}!`);
    },
    javascript2(){
        console.log(`I love ${this.name}!`);
    }
};
language.javascript1();
language.javascript2();


//interview Response: Yes, it is possible to create an arrow function in JavaScript dynamically. An example is a ternary statement that returns two anonymous arrow functions.
debugger;
let age = prompt('What is your age?' , 18);

let welcome = age < 18 ? () => console.log('Hello') : () => console.log('Greetings!')

welcome()
