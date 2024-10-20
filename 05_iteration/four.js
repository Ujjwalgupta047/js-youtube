// reduce

const mynums=[1,2,3,4];


const sumnums=mynums.reduce((accumulator,currentvalue)=>{

    console.log(`accu ${accumulator} currentvalue ${accumulator}`)
    return accumulator+currentvalue
},0)

// console.log(sumnums)

const shopping = [
    {
      title: "Laptop",
      price: 1200
    },
    {
      title: "Smartphone",
      price: 800
    },
    {
      title: "Headphones",
      price: 150
    },
    {
      title: "Backpack",
      price: 60
    },
    {
      title: "Smartwatch",
      price: 200
    }
  ];

  
  const totalprice=shopping.reduce((accu,item)=> accu+item.price,0);

  console.log(totalprice)