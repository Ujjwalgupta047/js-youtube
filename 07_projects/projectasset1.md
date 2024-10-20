
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