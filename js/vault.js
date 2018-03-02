var numberContainer = document.getElementById("number-container");
var clickCounter = 0;
var numberOne;
var numberTwo;
var numberThree;
var greenblock = document.getElementById('green-container');
var redblock = document.getElementById('red-container');
var intervalTimer = 0;
var numberButtons = document.getElementsByClassName('buttonNumber');
var audio_correct = new Audio('snd/correct.mp3');
var audio_false = new Audio('snd/false.mp3');

function getNumber(button) {
    //  console.log(button.value);
    clickCounter++;
    numberContainer.innerHTML += button.value;
    if (clickCounter == 1) {
      numberOne = button.value;
    }
    else if (clickCounter == 2) {
      numberTwo = button.value;
    }
    else {
      numberThree = button.value;
    }
    if (clickCounter == 3) {
      for(i=0; i < numberButtons.length; i++) {
        numberButtons[i].setAttribute('disabled', 'disabled');
      }
      if (numberOne == 3 && numberTwo == 2 && numberThree == 1) {
        audio_correct.play();
        window.alert("Good job!");
        document.body.style.backgroundImage = "url('img/opening.gif')";
        setTimeout( function () {location.reload(true); }, 5000);
        document.getElementById('good-answer').innerHTML = "The code is correct!";
        var blink = setInterval(function() {
        	//add +1 every time the setinterval function runs
        	intervalTimer++;

        	//method to show div on and off
        	//change the css of the green and red box to create a blinking effect
        	if (greenblock.style.visibility == 'hidden') {
        		greenblock.style.visibility = 'visible';
        	}else {
        		greenblock.style.visibility = 'hidden';
        	}

        	//check if the interval has runned ten times
        	if(intervalTimer == 10) {

        		//ClearInterval function stops the interval after 10 times
        		clearInterval(blink);

        	}

        }, 500);
      }
      else {
        audio_false.play();
        window.alert("Try again!");
        document.body.style.backgroundImage = "url('img/closed.gif')";
        setTimeout( function () {location.reload(true); }, 5000);
        document.getElementById('good-answer').innerHTML = "The code is incorrect!";
        var blink = setInterval(function() {
        	//add +1 every time the setinterval function runs
        	intervalTimer++;

        	//method to show div on and off
        	//change the css of the green and red box to create a blinking effect
        	if (redblock.style.visibility == 'hidden') {
        		redblock.style.visibility = 'visible';
        	}else {
        		redblock.style.visibility = 'hidden';
        	}

        	//check if the interval has runned ten times
        	if(intervalTimer == 10) {

        		//ClearInterval function stops the interval after 10 times
        		clearInterval(blink);
        }
      }, 500);
    }
  }
}
