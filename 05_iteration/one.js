// for of loop

const arr=[1,2,3,4,5,56]

// for(const x of arr){
//     console.log(x);
// }

// map

const mp=new Map;

mp.set("In","india");
mp.set("Ind","indonesia");
mp.set("Ind","indonesia");
mp.set("Usa","United States");



for(const [key,value] of mp){
    console.log(`key :${key} , value :${value}`)  // not valid to iterate on objects
}