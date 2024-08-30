'use strict';

/*
console.log(document.querySelector('.message').textContent);

//document.querySelector('.message') lấy cả block tag vs class là message.
//.textContent: lấy content trong thẻ....

document.querySelector('.message').textContent = 'correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;



document.querySelector('.guess').value = 23;
//.value use for tag input
console.log(document.querySelector('.guess').value);
*/


let secreNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number');

    //when player wins
  } else if (guess === secreNumber) {
    // document.querySelector('.message').textContent = 'correct number!';
    displayMessage('correct number!')



    document.querySelector('.number').textContent = secreNumber;
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';

    if (Number(document.querySelector('.highscore').textContent) < score) {
      document.querySelector('.highscore').textContent = score;
    }
    //when guess is too high
  } else if (guess !== secreNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secreNumber ? 'Too high!' : 'Too low!';

      displayMessage(guess > secreNumber ? 'Too high!' : 'Too low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = ' You lost the game!';
      displayMessage(' You lost the game!')


      document.querySelector('.score').textContent = 0;
    }
  }


  // else if (guess > secreNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is too low
  // } else {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

});


document.querySelector('.again').addEventListener('click', function () {

  secreNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;


  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';


});
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/