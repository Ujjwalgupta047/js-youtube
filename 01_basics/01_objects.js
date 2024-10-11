//singleton
//Object.create


// object literals

const mySym= Symbol("key1");

const jsUser={
    name :"ujjwal",
    [mySym]:"myKey",
    "full name" :"ujjwal gupta",
    age :74,
    add: "siwan",
    email:"ujj@gmail.com",
    isLoggedIn :false,
    lastLoginDays:["monday","tuesday"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.age=59;

// Object.freeze(jsUser)  // now cant update the object

jsUser.greeting=function(){
    console.log("good morning js User");
}
jsUser.greetingTwo=function(){
    console.log(`good morning js User ,${jsUser.name}`);
}

console.log(jsUser)
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

