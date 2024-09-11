function x() {
   let a = 0;

    function child() {
       a++;
    }

    return child
}

const y = x();
const y2 = x();

console.dir(y)
console.dir(y2);


function doSomething() {
   const username = 'john'
 
   function callbackfunction() {
      console.log(username)
   }

   setTimeout(callbackfunction, 2000)
}
 
doSomething();