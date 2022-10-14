
//Test If Match
const string = 'my name is kaihuan';
const regex = /name is ([a-z]*)/;
const match = regex.exec(string);
if (match) {
    const name = match[1];
    console.log("name",name);
}else{
    console.log('no match')
}

//regular expression anchors 
let str = `1 apple
2 apples
3 apples`

let re = /^\d/gm;
let matches = str.match(re);

console.log('expression anchors ',matches);

//Quantifiers
//The following regular expression combines those rules to match a time string in the hh:mm format:
const time = '05:30 31:62 23:45 26:99';
const pattern = /[01]\d|2[0-3]:[0-5]\d/g;
const orOperator = time.match(pattern);

console.log('orOperator',orOperator);

//Character Classes: regular expression /\d{1,}/g to match any numbers that have one or more digits in a phone number:
let numbers = '+1-(400)-123-456'.match(/\d{1,}/g);
console.log('Character Classes',numbers);

//Flags
//The ignore flag `(i)`, `i` stands for ignore.

let re2 = /hi/i;
let result2 = re2.test('Hi John');
console.log(result2); 

let re3 = new RegExp('hi','i');
let result3 = re3.test('HI John');
console.log(result3); 

//The global flag `(g)`
let message = 'Hi, are you there? hi, HI...';
let re4 = /hi/gi;
let matches4 = [];
let match4;
do {
    match4 = re4.exec(message);
    if(match4) {
      matches4.push(match4);
    }
} while(match4 != null)

console.dir(matches4);