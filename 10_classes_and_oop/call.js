const setUserName=function(username){
     this.username=username
}

const createUserName=function(username,email,password){
       setUserName.call(this,username)
       this.email=email
       this.password=password
}

const user= new createUserName('ujjwal',"ujjwal@gmail.com","5454")

console.log(user)