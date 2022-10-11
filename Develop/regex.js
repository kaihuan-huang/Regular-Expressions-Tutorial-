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
