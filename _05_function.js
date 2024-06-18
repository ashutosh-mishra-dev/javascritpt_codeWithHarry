// ------------------------------------- simple function ---------------------------------------

// function printMessage(){
//     console.log('this is function')
// }

// printMessage()
// printMessage()
// printMessage()
// printMessage()


// -------------------------------- function with parameter -------------------------------------

// function onePlusAvg(x,y){
//     let c = x+y
//    //console.log(c)
//    return 1+(x+y)/2
// }
// let a = prompt('enter the 1 numeric value')
// a = Number.parseInt(a)
// let b = prompt('enter the 2 numeric value')
// b = Number.parseInt(b)
// console.log(onePlusAvg(a,b))
// console.log(onePlusAvg(12,34))
// console.log(onePlusAvg(88,66))
// console.log(onePlusAvg(87,66))


// ------------------------------------- arrow function  ---------------------------------------

// function sum(p, q) {
//     return p + q
// }

// console.log(sum(20,90))

const sum = (p,q) => {
    return p + q
}
document.write('sum of P,Q : '+sum(40,90))