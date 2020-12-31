// https://css-tricks.com/snippets/css/a-guide-to-flexbox/

const doMath = document.getElementById("do-math")
const myForm = document.getElementById("my-form");
const myForm2 = document.getElementById("my-form2");
const answer = document.getElementById("data-output");

const handleClick = (e) => {
let originalNumber = myForm.value;
let newNumber = myForm2.value;

 //If there was an increase 
  if ((newNumber - originalNumber) > 0) {
    difference = (newNumber - originalNumber);        
    percentIncrease = Math.round((newNumber - originalNumber) /         originalNumber * 100);
          answer.innerHTML = `There was a <span class="highlight">${percentIncrease}% increase</span> from ${originalNumber} to ${newNumber}. <br> That's a difference of ${difference}.`;
          
//If there was a decrease
        }  else if ((newNumber - originalNumber) < 0) {
          difference = (originalNumber - newNumber);  
          percentDecrease = Math.round((originalNumber - newNumber) / originalNumber * 100);   
          answer.innerHTML = `There was a <span class="highlight"> ${percentDecrease}% decrease</span> from ${originalNumber} to ${newNumber}. <br> That's a difference of ${difference}.`;
          
//If there was no change
        } else if (newNumber === originalNumber) {
          answer.innerText = `There was no change.`
          console.log('There was no change.');
//If the inputs are invalid 
        } else {
          answer.innerText = 'Something went wrong. Try again.';  
          console.log('Something went wrong. Try again.');
        }
        };


