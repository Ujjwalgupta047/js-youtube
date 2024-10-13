//falsy value

// false 0 -0 BigInt, "" ,null,undefined,NaN

// truthy value

// "0","false", " ",[],{},function(){}

const emptObj={}

if(Object.keys(emptObj).length===0){
    // console.log("I am an empty object")
}

//nullish cascading operator (??): null undefined

// val1= 5 ?? 8
// val1= null ?? 8
val1=undefined ?? 99
val1=undefined ?? 99 ?? 80
console.log(val1)

//terniary

// conditon ? true : false