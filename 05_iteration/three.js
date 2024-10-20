// const coding=["cpp","java","ruby","python","c"]

// const arr=coding.forEach((item) =>{
//     console.log(item);
//     return item;
// })

//  console.log(arr);

const nums=[1,2,3,4,5,6,7,8,9,10]

// const newnums=nums.filter((item)=> item>4)

// console.log(newnums)

//  const newnums=[]

//  nums.forEach((num)=>{
//        if(num>4){
//          newnums.push(num);
//        }
//  })

//  console.log(newnums);

const books = [
    {
      title: "The Great Gatsby",
      genre: "Fiction",
      publish: 1925,
      edition: "3rd"
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publish: 1960,
      edition: "2nd"
    },
    {
      title: "1984",
      genre: "Dystopian",
      publish: 1949,
      edition: "1st"
    },
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publish: 1951,
      edition: "5th"
    },
    {
      title: "Moby-Dick",
      genre: "Adventure",
      publish: 1851,
      edition: "4th"
    },
    {
      title: "Pride and Prejudice",
      genre: "Romance",
      publish: 1813,
      edition: "6th"
    },
    {
      title: "War and Peace",
      genre: "Historical",
      publish: 1869,
      edition: "2nd"
    },
    {
      title: "The Lord of the Rings",
      genre: "Fantasy",
      publish: 1954,
      edition: "1st"
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      publish: 1937,
      edition: "3rd"
    },
    {
      title: "The Brothers Karamazov",
      genre: "Philosophical",
      publish: 1880,
      edition: "7th"
    }
  ];

  
//   const newbook= books.filter((lab) => lab.genre==='fiction')

//   const newbook= books.filter((lab) => lab.publish>1900)

//   const newnums= nums.map((num) => num+10)
 
// chaining 

  const newnums= nums.map((num) => num*10)
                     .map((num) => num+1)
                     .filter((num)=> num>40)

  console.log(newnums)

  