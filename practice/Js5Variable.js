console.log(DayInro)  // undefind 

var DayInro = 'sunday';
var numDay // undefined
var DayInro = "monday";
DayInro = "tuesday";
 
{
  var gameName = "chessboard"  // we can access the variable anywhere else globally because it's function scope
}

///////////////////////////////////////
console.log(lastName); // Reference error: cannot access 'last Name' before initialization.

{  
  let firstName = 'Shubham'  // firstname is declared but is's never used, because let is block scope and it's never accessed from the globally;
}
 let lastName = 'pandey'
 lastName = 'Pandit'; // we can reassign this value

//  let lastName = 'John'; // we can not redeclare the variable again.
 let age = `40`;
 let isHappy = true

//  firstName = "Rahaul"
 let firstName = "Shukal"
 

 let a 

 let userIntro  = 'Hi, my name is ' + firstName + ' ' + lastName + ' ' + age + ' ' + 'year old'

//  console.log(firstName);
/////////////////////////////////////////
 const hoursInDay = 24;
//  hoursInDay = 12
 const Inday = 7



//  const dayNames // declaration must be initalized.

 const cityName   = "San Francisco";

 {const fruitName = "Mango"}  // fruitName is declared but its value is never read. 
