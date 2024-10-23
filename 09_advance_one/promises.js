
// new Promise(function(resolve,reject){
//        setTimeout(()=>{
//           console.log('completed Task 1');
//           resolve()
//        },1000)
// }).then(function(){
//      console.log('async 1 resolved')
// })

// const promiseTwo=new Promise((resolve,reject)=>{
       
//     setTimeout(()=>{
//          resolve({name:"ujjwal gupta",email:"ujjwal@gmail.com"})
//     },1000)
// })

// promiseTwo.then((user)=>{
//      console.log(user)
// })

// const promiseThree=new Promise((resolve,reject)=>{
//        let error=true;

//        if(!error){
//             setTimeout(()=>{
//                 resolve({username:"ujjwal gupta",password:"547"})
//             },1000)
//        } 
//         else{
//             reject('Error : somenthing went wrong')
//         }
// })

// promiseThree
// .then((user)=>{
//      console.log(user)
//      return user.username
// })
// .then((username)=>{
//      console.log(username)
// })
// .catch((e)=>{
//      console.log(e)
// })

const promiseFour=new Promise((resolve,reject)=>{
     let error=false;

     if(!error){
          setTimeout(()=>{
              resolve({username:"ujjwal gupta 4",password:"5474"})
          },1000)
     } 
      else{
          reject('Error : somenthing went wrong')
      }
})

async function consumePromises(){
     try{
     const  response =await promiseFour
     console.log(response)
    }
    catch(e){
             console.log(e)
    }
}

consumePromises()

// async function getAllUser(){
//     try{
//        const response= await fetch('https://jsonplaceholder.typicode.com/users')
//        const data= await response.json()
//        console.log(data)
//     }
//     catch(e){
//          console.log('E :',e); 
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
     console.log(data)
})
.catch((e)=>{
    console.log("E :",e)
})