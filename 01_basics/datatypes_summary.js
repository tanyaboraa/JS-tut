//  Primitive (call by value)

// 7 types : String , Number , Boolean, null , undefined , Symbol (unique), BigInt

// JS is a dynaically typed language 

const score=100
const scoreValue= 100.3
const isLoggedIn =  false
const outsideTemp = null
let userEmsil; //udefined
const id= Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
// Reference (non primitve)

//Array, Objects , Functions

const drinks=["tea","coffee","juice"]
let myObj= {
    name:"tanya",
    age: 22,
}
const myfunction=function(){
    console.log("hello world")
}

