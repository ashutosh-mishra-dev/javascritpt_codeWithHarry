
// ---------------------------------- single dimension Array --------------------------------------

let marks = [91,98,null,false,"not present"]
document.write("<br>single diamension array :- <br>")
document.write(marks[0])
document.write('<br>')
document.write(marks[1])
document.write('<br>')
document.write(marks[2])
document.write('<br>')
document.write(marks[3])
document.write('<br>')
document.write(marks[4])
document.write('<br>')
document.write(marks[5])
document.write('<br>')

// change the value of Array

document.write("<br>change the value of Array  marks[2]:- <br>")
marks[2]=78
document.write(marks[2])
document.write('<br>')

// adding the new value of Array

document.write("<br>adding the new value of Array :- <br>")
marks[5]= "hello"

document.write(marks[0])
document.write('<br>')
document.write(marks[1])
document.write('<br>')

document.write(marks[3])
document.write('<br>')
document.write(marks[4])
document.write('<br>')
document.write(marks[5])
document.write('<br>')

// ----------------------------------- find the length of Array -------------------------------------

document.write("marks of length : ",marks.length)

// -------------------------------------  to string  -----------------------------------------------

let num = [1,2,3,44,55,65,22,5,11]
let a = num.toString()
console.log(typeof a)

//----------------------------------------------- join ----------------------------------------------

let b = num.join('-')
document.write("<br>join method :- <br>")
document.write(b)

//----------------------------------------------- array pop -----------------------------------------

document.write("<br>pop method :- <br>")
document.write(num)
let remove = num.pop()
document.write("<br>")
document.write("<br>pop value :--")
document.write(remove)
document.write("<br> after pop then array value : ")
document.write(num)
document.write("<br>")
document.write("<br>")

//------------------------------------------------ array push ---------------------------------------

document.write("array push method :--")
document.write("<br>")
document.write(num)
document.write("<br>after push array :-")
let addBypop = num.push(34,22,11,9,121,5,14,567,87,678,10,98)
document.write("<br>")
document.write(num)

//----------------------------------------------- array shift -------------------------------------

document.write("<br>")
document.write("<br>")
document.write("array shift method :--")
document.write("<br>")

let removeShift = num.shift()
removeShift = num.shift()
document.write("after remove using shift method :-- ")
document.write(removeShift)
document.write("<br>")
removeShift = num.shift()
document.write("after remove using shift method :-- ")
document.write(removeShift)
document.write("<br>")
removeShift = num.shift()
document.write("after remove using shift method :-- ")
document.write(removeShift)
document.write("<br>")
removeShift = num.shift()
document.write("after remove using shift method :-- ")
document.write(removeShift)
document.write("<br>")
removeShift = num.shift()
document.write("after remove using shift method :-- ")
document.write(removeShift)
document.write("<br>")
removeShift = num.shift()
document.write("after remove using shift method :-- ")
document.write(removeShift)
document.write("<br>")
document.write(num)

document.write("<br>")
document.write("<br>")

//------------------------------------------------- array unshift --------------------------------------

document.write("array unshift method :--")
document.write("<br>")

let addByUnshift = num.unshift(111,"hello",1.23) 
document.write(num)
document.write("<br>")
document.write("<br>")

//---------------------------------------------- array delete -------------------------------------------

document.write("array delete method :--")
document.write("<br>")

let deleteVar = delete num[0]
document.write(deleteVar)
delete num[3]
document.write("<br>")
console.log(num)
document.write("<br>")
document.write("in this array only data delete but index is not deleted")
document.write("<br>")
document.write("<br>")

// --------------------------------------- use of for of loop -------------------------------------------
for(let i of num){
    document.write(i)
    document.write("<br>")
}

document.write(num)

document.write("<br>")

for(let i of num){
    delete i
    document.write(i)
    console.log(i)
    document.write("<br>")
}

// --------------------------------------- use of concate -----------------------------------------------

let arr1 = [1,2,3];
let arr2 = ['a','b','c']
let arr3 = [true, null,false,"string",45,undefined]

let newArr = arr1.concat(arr2,arr3);
console.log("use of concat : " ,newArr);

// --------------------------------------- use of sort  --------------------------------------------------

let num1 = [22,1115,13,4,654,3,45,987,33,2,11]
console.log("use of sort() : ",num1.sort());
