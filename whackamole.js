// Assign the '' variable as the HTML elements with corresponding class
const squares = document.querySelectorAll('.square');
const startButtons = document.querySelectorAll('.start');
const bowlometer = document.querySelector('#bowlometer');
const timeLeft = document.querySelector('#time-left');
const scoreEl = document.querySelector('#score');
const GAME_DURATION = 30;
const TICK_MS = 1000;
const BOWL_CLASSES = ['itsAStart', 'halfEmpty', 'lookinGood', 'fullAMole', 'nice'];
const INGREDIENT_CLASSES = ['mole', 'onion', 'tomato'];
// Initialize timer ids and game state
let timerId = 0;
let randomId = 0;
let fillId = 0;
const state = {
    time: 0,
    score: 0,
    hitPosition: null,
    running: false,
};

function stopGame() {
    clearInterval(timerId);
    clearInterval(randomId);
    clearInterval(fillId);
    state.hitPosition = null;
    state.running = false;
}

// Add and remove img to an HTML element with the square class
    // A: Remove the 'mole', 'onion', and 'tomato' class from each square 
    // B: If the 'currentTime' variable exactly equals 0, clear the 'hitPosition' and stop
    // C: Assign the 'randomPosition' variable to one of the 9 squares and add the 'mole', 'onion', or 'tomato' class to that square
    // D: Assign the 'hitPosition' variable the id of the 'randomPosition' variable
function randomSquare() {
    squares.forEach(className => {// A
        className.classList.remove(...INGREDIENT_CLASSES);
    });

    if (state.time === 0) {// B
        state.hitPosition = null;
        return;
    }

    const randomPosition = squares[Math.floor(Math.random() * squares.length)];// C
    const ingredientClass = INGREDIENT_CLASSES[Math.floor(Math.random() * INGREDIENT_CLASSES.length)];
    randomPosition.classList.add(ingredientClass);

    state.hitPosition = randomPosition.id;// D
}

// Listen for mouse clicks on each of the HTML elements assigned the square class
    // A: The 'mouseup' event listener is added to the id of each square element
    // B: If the id of the square matches the id of the 'hitPosition' variable exactly
    // C: Check if the game has any time left, if there is no time left don't allow the score to increase
    // D: If the game does have time left, add one to the score
    squares.forEach(id => {
    id.addEventListener('mouseup', () => {// A
        if (!state.running || state.time === 0) {// C
            return;
        }

        if (id.id === state.hitPosition) {// B
            state.score++;
            scoreEl.textContent = state.score;            
        }
    })
})

// As the score increases, the bowl begins filling with guacamole
// A: Check if the 'score' text content is greater than the specified number
// B: If it is, remove the existing assigned class
// C: And replace it with a new one
function fillTheBowl() {
    const scoreValue = state.score;

    bowlometer.classList.remove(...BOWL_CLASSES);// B

    if (scoreValue === 69) {// A
        bowlometer.classList.add('nice');// C
        return;
    }

    if (scoreValue > 50) {// A
        bowlometer.classList.add('fullAMole');// C
        return;
    }

    if (scoreValue > 35) {// A
        bowlometer.classList.add('lookinGood');// C
        return;
    }

    if (scoreValue > 25) {// A
        bowlometer.classList.add('halfEmpty');// C
        return;
    }

    if (scoreValue > 10) {// A
        bowlometer.classList.add('itsAStart');// C
    }
}

// Count down to 0 and alert game over
    // A: Check that the value of the 'currentTime' variable does not exactly equal 0
    // B: If it does, clear the intervals set to the 'timerId' variable
    // C: Alert browser message with the final score
    // D: Otherwise, subtract 1 from the 'currentTime' variable 
    // E: Set the text content of the 'timeLeft' variable equal to the 'currentTime' variable
function countDown() {
    if (state.time <= 0) {// A
        stopGame();// B
        //alert(`GAME OVER! Your final score is ${state.score}`);// C
        return;
    }

    state.time--;// D
    timeLeft.textContent = state.time;// E

    if (state.time === 0) {
        stopGame();// B
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
startButtons.forEach(id => {
    id.addEventListener('mouseup', () => {// A
        stopGame();// B
        state.running = true;
        bowlometer.classList.remove(...BOWL_CLASSES);// C
        alert('Smash the ingredients as they appear by clicking on them to make some digital guacamole!?'); // E
        randomId = setInterval(randomSquare, TICK_MS); // F
        fillId = setInterval(fillTheBowl, TICK_MS); // G
        state.time = GAME_DURATION; // I
        timeLeft.textContent = state.time; // H
        state.score = 0; // J
        scoreEl.textContent = state.score; // K
        timerId = setInterval(countDown, TICK_MS);// L
    })
})



    
