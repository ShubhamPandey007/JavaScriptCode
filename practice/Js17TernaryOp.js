//Ternary operator

const username = 5 > 2 ? 'Shubham' : 'Shree'
console.log(username)


// debugger;
const gender = 'F'

const userMessage = `${gender === 'f' ? 'She' : 'He'} is a college student`
/////


function getFree(isMember){
    return isMember ? '$2.00' : '$10.00';
}
console.log(getFree(true));

console.log(getFree(false));

console.log(getFree(null));


///
const age = prompt("Enter your age:")

const perAge = age >= 21 ? "your go allowed in the party" : "you are not allowed in the party "
console.log(perAge);


