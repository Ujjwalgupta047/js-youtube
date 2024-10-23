// class User{
//       constructor(username,email,password){
//         this.username=username
//         this.password=password
//         this.email=email
//       }

//       encryptPassword(){
//         return `abc${this.password}`
//       }

//       updatePassword(){
//         return this.password.toUpperCase()
//       }
// }

// const chai=new User('ujjwal',"ujjwal@gmail.com","545421")

// console.log(chai.encryptPassword())
// console.log(chai.updatePassword())

//behind the scene or other than classes

const User=function(username,email,password){
    this.username=username
    this.password=password
    this.email=email

    
}

User.prototype.encryptPassword= function(){
    return `abc${this.password}`
 }
 
 User.prototype.updatePassword= function(){
     return this.password.toUpperCase()
   }

   const tea=new User("rahul","rahul@gmail.com","dfsjdfgs")

   console.log(tea.encryptPassword())
   console.log(tea.updatePassword())