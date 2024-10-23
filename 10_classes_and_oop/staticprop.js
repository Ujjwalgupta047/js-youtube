class User {
    constructor(username){
        this.username=username
    }
    
    logMe(){
        console.log(this.username)
    }

   static setId(){
         console.log('123')
    }
}

const chai=new User("ujjwal")

chai.logMe()
// chai.setId() //  due to static keyword it does not have excess to that function its like private we can say

class Teacher extends User{
    constructor(username,salary){
        super(username)
        this.salary=salary
    }

}

const tea= new Teacher('rahul',545454)

tea.logMe()
// tea.setId()   event child classes also cannot inherit this member function