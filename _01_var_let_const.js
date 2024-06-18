
const accountId  = "cid-123"; 
let accountName  = "ashutosh"; 
let age          = 30;
var accountEmail = "ak@gmail.com"; 
accountCity      = "surat";


// accountId = 4343; constant not allow to changes
accountName = "krishna mishra";
var accountEmail = "kk@gmail.com"; 
accountCity      = "prayag";

console.log(accountId);

console.table([accountId,accountName,accountEmail,accountCity]);

// ------------------------ difference between Const / var / let -------------------------------------

// const -> constant not allow to changes
// let -> block level hota h
// var -> global level 

// ------------------------------ dataTYpes in javascript --------------------------------------------

// ------------ primitive datatypes ------------
/*
number    => 2 to power 53 ex 1234567
bigInt    => use for facebook, stock market, jha bahut bade Node. lagte ho  ex 9999999999999999999999999999999999999..N
string    => "double", or 'single'
boolean   => true / false 
null      => standalone value ex let weatherDegree = null
undefined =>  ex let name;
Symbol    => unique
*/
// ---------------- object --------------------

// object    => {}
// Array    => []
    
// ------------ check datatype using typeof() ---------------

console.log(typeof "ashutosh"); //string -> true
console.log(typeof age); // number -> true
console.log(typeof undefined); // undefined -> true
console.log(typeof null); // object -> some type of error in js
