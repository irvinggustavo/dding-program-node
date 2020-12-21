 

const userInput = process.argv;
const workData = userInput.slice(2);

let numbers = [];
let NAN = [];

const sum = (acc, currValue) => acc + currValue;

const screning = (array) => {
  array.forEach((element) => {
    let num = Number(element);
    Number(num) === num ? numbers.push(num) : NAN.push(element);
  });
};


if (process.argv[2]) {
    screning(workData);
    let total = numbers.reduce(sum);
    console.log(`Your numbers were  =====> ${numbers}`);
    console.log(`The total sum of your numbers is =====> ${total}`);
    console.log(`This were not numbers  =====> ${NAN}`);
} else {
    console.log('Submit some data to play like this ====> node server.js 1 d 4 5 g 67')
};







