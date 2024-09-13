const user = 'shubham'; 
let userage = 30;
// debugger;
 
function substract () {
const x = 15;
const y = 23;
const z = 45;
console.log(x - y);
console.log(user)


function child(){
    const childName = 'Golu';
    console.log(childName)
    console.log(z)  //when we use outer function variables to inside inner function This is called clouser;

    {
        const num1 = 77;  // this is block scope , 
    }
    // console.log (num1);

    function grandchild() {
        const grandchild = 'molu'
        console.log(grandchild)
        console.log (childName)
    }
    grandchild();//grandchild ke pass child() ka our substract() ka aur global scope ka  access agar ham sabko mila dete hai to use ham lexical scope kahte hai.

}
child();
}
substract();


