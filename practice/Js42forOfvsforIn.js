const fruits = ['banana', 'apple', 'orange', 'mango', 'grapes']

// for(let i = 0; i < fruits.length; i++) {
//     console.log( fruits[i]);
// }

console.log('***********')

// for (fruit of fruits) {
//     console.log(fruit)
  // ese me jo last value rahegi vo merory me save rahegi, aur ye jo three dot aa raha hai, to hame ese ak variable banana chahiye, use to let cosnt var.
console.log('***********')

// for (var fruit of fruits) {
//     console.log(fruit)
// }

console.log('***********')
for (const fruit of fruits){
    console.log(fruit); 
}  // when we stor fruit in const variable then we check for the value in console , to find the fruit is not defined


// use for of loop to string
const user ='Shubham Pandey'
for (const letter of user){
    console.log(letter);
}


// we can't apply the for of loop to object;
const person = {
    firstName: "john",
    lastName: 'Hoe',
    age: 34,
    eyecolor: 'blue',
    city: 'Delhi'
}
for(const key in person){
    // console.log(key) // access the key
    // console.log(person[key])
 //access the value, this is called bracket notation.
 console.log(key, ' :' , person[key])
    
}