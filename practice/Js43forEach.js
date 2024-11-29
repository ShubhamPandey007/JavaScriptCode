//forEach() method always return undefined , and perform an operation on each element of the array. it takes a callback function as an argument and applies it to each element of the arry.

const fruits = ['banana','apple', 'orange', 'grapes', 'guava']

// for(const fruit of fruits) {
//     console.log(fruit);
// }

// fruits.forEach(function(fruit){  
// console.log(fruit);
// })

fruits.forEach((fruit , index)=> {
    console.log(fruit.toUpperCase() , index);
})
 
////////////
fruits.forEach((fruit) => {
    console.log(fruit.toUpperCase())
    return fruit.toUpperCase(); 
})

// function abc(el) {  // pass function with name it is not use more.
//     console.log(el)
// }
// fruits.forEach(abc);