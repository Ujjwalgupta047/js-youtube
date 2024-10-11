const marvel=["ironman","antman","spiderman"];
const dc=["batman","flash","catman"];

const newArr=marvel.concat(dc);  // to join to Array

const newArr2=[...marvel,...dc];

// console.log(newArr2);

const numArr=[1,2,3,4,[5,6,7],[9,8,,6,[3,5,65]],90];

const newArr3=numArr.flat(Infinity);

// console.log(newArr3);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from( {name :"Hitesh"})); //intresting

const a=5,b=43,c=90;

console.log(Array.of(a,b,c));