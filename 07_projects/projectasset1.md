
#project related to dom

## project link

[click](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code

## project 1
``` javascript
 const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
console.log(buttons)

buttons.forEach((btn)=>{
  console.log(btn);
  btn.addEventListener('click',(event)=>{
    console.log(event)
    console.log(event.target)

    if(event.target.id=='grey'){
      body.style.backgroundColor="grey"
    }
   else if(event.target.id=='white'){
      body.style.backgroundColor="white"
    }
   else if(event.target.id=='blue'){
      body.style.backgroundColor="blue"
    }
   else if(event.target.id=='yellow'){
      body.style.backgroundColor="yellow"
    }
    else {
      body.style.backgroundColor="white"
    }
  })
})
```

#project 2
```javascript
const form=document.querySelector('form')

form.addEventListener('submit',(event)=>{
  event.preventDefault()

  const weight=parseInt(document.querySelector('#weight').value)
  const height=parseInt(document.querySelector('#height').value)

  const result=document.querySelector('#results')

  

    if(height=='' || height<0 || isNaN(height)){
          result.innerHTML=`plz enter a valid height ${height}`
    }
    else if(weight=='' || weight<0 || isNaN(weight)){
      result.innerHTML=`plz enter a valid weight ${weight}`
    }
    else {
      const bmi=(weight/((height*height)/10000)).toFixed(2)

       if(bmi<18.6){
        result.innerHTML=`<span>${bmi} </span> </br> <p>under weight </p>` 
       }
      else if(bmi>=18.6 && bmi<= 24.9){
        result.innerHTML=`<span>${bmi} </span> </br> <p>Normal weight range</p>` 
       }
       else{
        result.innerHTML=`<span>${bmi} </span> </br> <p>Over Weight</p>` 
       }
       
    }
})
```
