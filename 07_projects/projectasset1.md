
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

## project 2

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
## project 3

``` javascript
const clock=document.querySelector('#clock')

setInterval(function(){
  const time=new Date().toLocaleTimeString();
  console.log(time)
  clock.innerHTML=` ${time} `
},1000)

```

## project 4

``` javascript

let randomNum = Math.ceil(Math.random() * 100);
let maxChance=10;
const form = document.querySelector('.form');
const userInput = document.querySelector('#guessField');
const chanceLeft=document.querySelector('.lastResult')
const feedbackPara=document.querySelector('.lowOrHi')
const previousGuessesDisplay=document.querySelector('.guesses')
console.log(randomNum);
const prevarr=[]


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const num = Number(userInput.value); 
  userInput.value = ''; 
  validate(num);
});


const validate = (num) => {
  if (isNaN(num)) {
    console.log("Please enter a valid number");
    return false
  } else if (num < 1 || num > 100) {
    console.log("Enter a number between 1 and 100");
    return false;
  } else {
    prevarr.push(num)
    displayPreviousGuesses();
    isChance(num);
  }
};

const displayPreviousGuesses = () => {
  previousGuessesDisplay.textContent = prevarr.join(', ');
};

const isChance=(num)=>{
    maxChance--;
    chanceLeft.textContent=maxChance;
    if(maxChance<=0){
      console.log("You've crossed the guess limit! Restarting the game...")
      restartGame()
    }
    else{
      check(num)
    }
}

const check = (num) => {
  if (num === randomNum) {
    feedbackPara.textContent="Wow! You guessed the right number! Game has been Restarted"
     restartGame()
  } else if (num < randomNum) {
    feedbackPara.textContent='Try guessing a higher number'
  } else {
    feedbackPara.textContent='Try guessing a lower number'
  }
};

const restartGame = () => {
  prevarr.length=0
  displayPreviousGuesses();
  maxChance = 10; 
  chanceLeft.textContent=maxChance;
  randomNum = Math.ceil(Math.random() * 100);
  userInput.value = ''; 
  console.log("The game has restarted! Try guessing a new number.");
  console.log(randomNum); 
};

```