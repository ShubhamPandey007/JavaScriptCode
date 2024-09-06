Boolean(1) // true
Boolean(' ') // true
Boolean('') // false
Boolean(0) // false
Boolean(NaN) // false
Boolean(-Infinity) // false
Boolean(undefined) // false
Boolean(-0) // false
Boolean(null)  // false
!0 // true
!!0 // false



const userage = 15;

// const isCollegeStudent = (userage >=13) && (userage <=52);


// const  isCollegeStudent = (userage >=18) && (userage <= 45);
const  isCollegeStudent = (userage >=5) && (userage <= 18);

let userIntro = 44;

const userIntroPoint = (userIntro >= 55) || ( userage <= 88);

const andResult5 = 'hello' && console.log('hello');
const orResult5 = undefined || console.log('hello');