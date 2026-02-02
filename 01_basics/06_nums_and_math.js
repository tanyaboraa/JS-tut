const score=400
// console.log(score) //400

const balance=new Number(100) //gauranteed number type
// console.log(balance) //[Number: 100]


// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) //for ecommerce 

const otherNumber=123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));

//*****************MATHS************* */

// console.log(Math)
// console.log(Math.abs(-2))
// console.log(Math.floor(5.2))

//mostly round used

// console.log(Math.max(4,3,6,2))
// console.log(Math.floor(Math.random()*10)+1)


const min=10
const max=20
 //important formula
console.log(Math.floor(Math.random() * (max-min+1))+min) 
