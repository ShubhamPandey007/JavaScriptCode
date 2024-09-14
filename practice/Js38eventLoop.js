console.log('hi-1')

function test () {
    console.log('Hello world')
}

for(let i = 0; i <= 4; i++){
    console.log(i)
}
// debugger;
test();

// debugger;
setTimeout(test, 1000);  //setTimeout is asynchronous function

setTimeout(function() {
    console.log("I am SDE");        
}, 2000)

console.log("hii-2")   