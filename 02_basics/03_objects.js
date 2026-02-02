// singleton - constructor se jab banate h to ek obj apni tareeke ka 
//dusri tareeke(literalls) se banate h to singleton nhi rhta multiple instances ban jaate h 


// Object.create - constructor , singleton


//Object literals

const mySym=Symbol("key1")

const JsUser={
    name:"tanya" ,//key value pair //by default name treated as "name"
    "full name":"tanya bora",
    [mySym]:"mykey1", 
    age:18,
    location:"uttrakhand",
    email:"tanya@gmailc.om",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]); 

// console.log(typeof JsUser.mySym); //important gives- string without sq bracket
// console.log(JsUser[mySym]); 


JsUser.email="tanya@chatgpt.com"
// Object.freeze(JsUser) // no erorrs but changes do not propagate
JsUser.email="tanya@chatmicrosoft.com"
// console.log(JsUser); 

JsUser.greeting=function(){
    console.log("Hllo jS uSER");
    
}
// console.log(JsUser.greeting())
JsUser.greetingTwo=function(){
    console.log(`Hllo jS uSER, ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())