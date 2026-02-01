const accountId= 14453
let accountEmail="tanya@gmail.com"
var accountPassword="12344"
accountCity="Jaipur"
let accountState
//accountId=2 //not allowed

//dont use var because of issue in block scope and functional scope
console.log(accountId);
accountEmail="h@gmail.com"
accountPassword="2133"
accountCity="Bengaluru"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])