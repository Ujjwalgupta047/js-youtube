class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`TEacher for new course is ${this.username}`)
    }
}

const chai=new Teacher('Raunit',"abc@gmail.com","akjgak12")

chai.addCourse()
chai.logMe()

const masalaChai=new User("hrithik")

masalaChai.logMe()

console.log(chai instanceof Teacher)