// Assign the '' variable as the HTML elements with corresponding class
const square = document.querySelectorAll('.square');
const start = document.querySelectorAll('.start');
const bowlometer = document.querySelector('#bowlometer');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
// Initialize the 'result', 'timerId', 'randomId', 'fillId', and 'currentTime' variables to 0
let result = 0;
let timerId = 0;
let randomId = 0;
let fillId = 0;
let currentTime = 0;
let hitPosition = null;

// Add and remove img to an HTML element with the square class
    // A: Remove the 'mole', 'onion', and 'tomato' class from each square 
    // B: If the 'currentTime' variable exactly equals 0, clear the 'hitPosition' and stop
    // C: Assign the 'randomPosition' variable to one of the 9 squares and add the 'mole', 'onion', or 'tomato' class to that square
    // D: Assign the 'hitPosition' variable the id of the 'randomPosition' variable
function randomSquare() {
    square.forEach(className => {// A
        className.classList.remove('mole');
        className.classList.remove('onion');
        className.classList.remove('tomato');
    });

    if (currentTime === 0) {// B
        hitPosition = null;
        return;
    }

    const randomNumber = Math.floor(Math.random() * 3) + 1; // Generate random number between 1 & 3 to use for the if else statement
    const randomPosition = square[Math.floor(Math.random() * 9)];// C

    if (randomNumber === 1) {
        randomPosition.classList.add('mole');
    } else if (randomNumber === 2) {
        randomPosition.classList.add('onion');
    } else if (randomNumber === 3) {
        randomPosition.classList.add('tomato');
    }

    hitPosition = randomPosition.id;// D
}

// Listen for mouse clicks on each of the HTML elements assigned the square class
    // A: The 'mouseup' event listener is added to the id of each square element
    // B: If the id of the square matches the id of the 'hitPosition' variable exactly
    // C: Check if the game has any time left, if there is no time left don't allow the score to increase
    // D: If the game does have time left, add one to the score
    square.forEach(id => {
    id.addEventListener('mouseup', () => {// A
        if (currentTime === 0) {// C
            return;
        }

        if (id.id === hitPosition) {// B
            result++;
            score.textContent = result;            
        }
    })
})

// As the score increases, the bowl begins filling with guacamole
// A: Check if the 'score' text content is greater than the specified number
// B: If it is, remove the existing assigned class
// C: And replace it with a new one
function fillTheBowl() {
// A
    if (score.textContent > 10) {// A
        bowlometer.classList.add('itsAStart');// C
    }
    
    if (score.textContent > 25) {// A
        bowlometer.classList.add('halfEmpty');// C
    }
    
    if (score.textContent > 35) {// A
        bowlometer.classList.add('lookinGood');// C
    }
    if (score.textContent > 50) {// A
        bowlometer.classList.add('fullAMole')// C
    }
    if (score.textContent == 69) {// A
        bowlometer.classList.remove('fullAMole');// B
        bowlometer.classList.add('nice');// C
    }

    if (score.textContent > 69) {// A
        bowlometer.classList.remove('nice');// B
        bowlometer.classList.add('fullAMole');// C
    }
    
    }

// Count down to 0 and alert game over
    // A: Check that the value of the 'currentTime' variable does not exactly equal 0
    // B: If it does, clear the intervals set to the 'timerId' variable
    // C: Alert browser message with the final score
    // D: Otherwise, subtract 1 from the 'currentTime' variable 
    // E: Set the text content of the 'timeLeft' variable equal to the 'currentTime' variable
function countDown() {
    if (currentTime <= 0) {// A
        clearInterval(timerId);// B
        clearInterval(randomId);
        clearInterval(fillId);
        hitPosition = null;
        //alert(`GAME OVER! Your final score is ${result}`);// C
        return;
    }

    currentTime--;// D
    timeLeft.textContent = currentTime;// E

    if (currentTime === 0) {
        clearInterval(timerId);
        clearInterval(randomId);
        clearInterval(fillId);
        hitPosition = null;
    }
    
}

// Start the game
    // A: The 'mouseup' event listener is added to the id of each start element
    // B: Clear any set intervals on the 'timerId' 'randomId' and 'fillId' variables
    // C: Remove all added classes to the html element with bowlometer id
    // E: Set an alert that explains the rules
    // F: set the 'randomId' variable to call the randomSquare function every specified interval
    // G: set the 'fillId' variable to call the fillTheBowl function every specified interval
    // H: Set the text content for the 'timeLeft' variable to 30
    // I: Assign the 'currentTime' variable a value of 30
    // J: Set the 'result' variable = 0
    // K: Set the text content of any HTML element with the class score to the value of the 'result' variable
    // L: The 'timerId' variable is set to call the countDown function every specified time interval
start.forEach(id => {
    id.addEventListener('mouseup', () => {// A
        clearInterval(timerId); // B
        clearInterval(randomId);
        clearInterval(fillId); 
        bowlometer.classList.remove('itsAStart', 'halfEmpty', 'lookinGood', 'fullAMole', 'nice');// C
        alert('Smash the ingredients as they appear by clicking on them to make some digital guacamole!?'); // E
        randomId = setInterval(randomSquare, 1000); // F
        fillId = setInterval(fillTheBowl, 1000); // G
        currentTime = 30; // I
        timeLeft.textContent = currentTime; // H
        result = 0; // J
        score.textContent = result; // K
        timerId = setInterval(countDown, 1000);// L
    })
})



    
