
// ------------------------------ Escape Sequence charater ----------------------------

var fruit1 =  'Ban\'ana'
var fruit2 =  'Ban\nana'
var fruit3 =  'Ban\t\t\t\tana'
var fruit4 =  'Ban\rana'

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);

// ------------------------------- Template literals ----------------------------------

let name = "Ashutosh kumar krishna kumar"
let surname = "Mishra"
let name2 = "ASHUTOSH KUMAR MISHRA"

document.write(`my name is : ${name} and surname is : ${surname} <br>`)


// ------------------------------------- length -------------------------------------

document.write('<br>')
document.write('---------------- use of lenght  ----------------')
document.write('<br>')

document.write(`${name} ${surname}`.length)
document.write('<br>')
console.log(`${name} ${surname}`.length)


// ---------------------------------- UPPER CASE -----------------------------------
document.write('<br>')
document.write('----------------  use of UPPER CASE  ----------------')
document.write('<br>')

document.write(`${name} ${surname}`.toUpperCase())
console.log(`${name} ${surname}`.toUpperCase())

//----------------------------------- Lower case -----------------------------------

document.write('<br>')
document.write('--------------------- use of lower cases ------------')
document.write('<br>')

document.write(name2.toLowerCase())
console.log(name2.toLowerCase())

// ----------------------------------- slice ---------------------------------------

document.write('<br>')
document.write('-------------------- use of slice -------------------')
document.write('<br>')

document.write(name2.slice(-5))
document.write('<br>')
document.write(name2.slice(2,9))

//---------------------------------- replce ----------------------------------------
document.write('<br>')
document.write('----------------------- use of replce ------------------')
document.write('<br>')

document.write(name2.replace("ASHUTOSH","ashu"))

// ---------------------------------- trim ----------------------------------------
document.write('<br>')
document.write('--------------------- use of trim -----------------------')

let checkStr = "       check trim string   ";
document.write('<br>')
document.write(checkStr.length)
document.write('<br>')
document.write(checkStr.trim().length)
document.write('<br>')
document.write(checkStr.trimEnd().length)
document.write('<br>')
document.write(checkStr.trimStart().length)


// ---------------------------------- include ----------------------------------------
document.write('<br>')
document.write('--------------------- use of include -----------------------')

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = "fox";

console.log(sentence.includes(`the ${word} is ${ (word) ? 'matched' : 'not matched' }`));
console.log(`the word "${word}" ${sentence.includes(word) ? 'is' : 'not'} in sentance`);
console.log(`${sentence.includes(word) ? 'true' : 'false'}`);

