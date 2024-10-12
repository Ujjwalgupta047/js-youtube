
const user={
    username:"ujjwal",
    price :499,
    welcomemessage:function(){
        console.log(`${this.username} is the name of the user`)  // this refers to the current context
        console.log(this);
    }
}
 // global object inside the browser is window object !important

// user.welcomemessage()
// user.username="rahul"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     console.log(this);
// }

// chai()

//  const chai= function(){
//  const username="ujjwal"
//     console.log(this.username);
// }

// chai()

 const chai= ()=>{
 const username="ujjwal"
    console.log(this.username);
}

// chai()

// const sum=(a,b)=>{
//     return a+b;
// }

// implicit return 

// const sum= (a,b)=> a+b

// const sum = (a,b)=> (a+b)



// to return object it comes into use

const sum = (a,b)=> ({username:"ujjwal"})

console.log(sum(8,9))