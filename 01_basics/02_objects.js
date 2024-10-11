// const obj= new Object();

const tinderUser={};


tinderUser.Id="3673"
tinderUser.name="Ujjwal Gupta"
tinderUser.age=45
// console.log(tinderUser);

const regularUser={
    email :"ajfa@gmail.com",
    fullname:{
        userName :{
            firstName:"ujjwal",
            lastName :"gupta"
        }
    }
}

// console.log(regularUser.fullname.userName.firstName);

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

const obj3=Object.assign({},obj1,obj2);

const obj4={...obj1,...obj2};


// console.log(obj3);
// console.log(obj4);

const users=[
    {
        id:"1",
        name:"ujjwal"
    },
    {
        id:"2",
        name:"rahul"
    },
    {
        id:"3",
        name:"chandan"
    }
]

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("age"));

// destructring

const course={
    course_name:"codeAurChai",
    price :1444,
    course_teacher:"hitesh"
}

const {course_name:teacher}=course

console.log(teacher);


// response format from apis

// json

// {
//     name:"ujjwal",
//     age:44,
//     add:"aasf",
//     id:"47894",
//     email:"3asoak"
// }

//or

[
    {}
    ,
    {}
    ,
    {}
    ,
    {}
]