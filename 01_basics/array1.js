const arr=[1,2,3,4];

const myarr=new Array(3,4,5,6,7);

console.log(myarr[1]);

//methods

// arr.push(87);
// arr.pop();

arr.unshift(90); // insert at begining
arr.shift(); // delete at beginging

console.log(arr.includes(88));
console.log(arr.indexOf(88));

const newarr=arr.join();  //changes arr into string

// console.log(arr);
// console.log(newarr); 

console.log("A",arr);

const a= arr.slice(1,3);  // it cuts 1 less than last written index

console.log(a);

console.log("B",arr);

const c= arr.splice(1,3);   // it also make changes in the original array

console.log(c);
console.log("C",arr);