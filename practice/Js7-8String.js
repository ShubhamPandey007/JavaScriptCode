var message = "hello world!"

const capitalMessage = message.toUpperCase();
console.log(capitalMessage)

const fakeMessage = '     Hi, I am Shubham.    '; // use "trim()" to remove whitesapce in the string message.
const finalMessage = fakeMessage.trim();
console.log(finalMessage);

// if any character is doesnot exist then it will return -1;
const replceMessage = fakeMessage.replace('Hi', 'Hello Dear');
console.log(replceMessage)

const lastfourDight = '76784353'
const maskedAccoutNumber = lastfourDight.padStart(16, "*");
console.log(maskedAccoutNumber);

//////
const charName = "my Name is Shubham Pandey";
const finalName = charName.charAt(8);
console.log(finalName)
 
const accountNumber1 = `This is my Acc number` .concat(lastfourDight)

const accountNumber2 = `This is my Acc  ${lastfourDight}`
const accountNumber3 = ` This is my Account number is ${lastfourDight}`