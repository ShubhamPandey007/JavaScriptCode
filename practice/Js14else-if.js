


const username =  'shubham';
const userage = 25
console.log(`Name: ${username}`);
console.log(`Age: ${userage}`);


if (userage >= 0 && userage <= 4){
    console.log(`${username} is  a kid`);
    console.log('And he is playing');
} else if (userage >= 5 && userage <= 17){
    console.log(`${username} is a school student`);
    console.log('And he is learning science and maths');
} else if ( userage >= 18 && userage <= 24){
    console.log(`${username} is a college student`);
    console.log('and he is learning science ');
} else if ( userage >= 25 && userage <= 45) {
    console.log(`${username} is working professional`);
    console.log('and he is a web developer')
} else if ( userage >= 45 && userage <= 121){
    console.log(`${username} is retired`);
    console.log('and his is reads newspapers')
} else {
    console.log('Please Enter valid Age');
}

console.log('Programmign is activited');

