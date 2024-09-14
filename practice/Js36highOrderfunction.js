function a() {
    console.log('hello')

}
a ()

/////
function b(user) {
    console.log(user);
}
b('shubham');   // ham yaha jo argument pass karte hai vo funtion ke pairameter vale value me store hota phir ham usi ko conlsole karate hai.

////
 // function Expression
const sayHi = function () {
    console.log("hello");
}
sayHi();


//heigh order function

function aa(bb) {
console.log(typeof bb)
// console.log(bb)
}
aa('Hiii')
aa({username: 'shubham', userage: 30}) // pass object as argument.
aa([1, 2, 3, 4, 5]) // pass array as an argument.


//////
// pass function to inside an other function,  


function a1(b1) {
    console.log(b1);
    console.dir (b1);
    b1 ();

}
function username () {
    console.log('Hello shubham');
    
}

a1(username);  // pass function as an argument


//////////////////////////////////////


function xyz(b2, c2){
    console.dir(b2);
    // console.log(b2);
    b2();
    console.dir(c2);
    c2();
}

function abc(){
    console.log("hello xyz, how are you")
}
function mno(){
    console.log("Hello, I am mno,")
}

xyz(abc, mno); // pass function as an argument


/////////////////////////

function pqr(Okk){
    console.dir(Okk);
    Okk();
}
pqr(function(){
    console.log('hello, I am an anonymous function')
})    // function that has no name is called anonymous function.  we can function inside the function directly.