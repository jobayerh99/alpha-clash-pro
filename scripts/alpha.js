

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    // stope game if pressed esc
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    

    if (playerPressed === expectedAlphabet){
        continueGame()
        removeBackgroundColourById(expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;
    }
    else{
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)

    //    currentLifeElement = document.getElementById('current-life');
    //    const currentLifeText = currentLifeElement.innerText;
    //    const currentLife = parseInt(currentLifeText);

    //    const newLife = currentLife - 1;

    //    currentLifeElement.innerText = newLife;

       if(updatedLife === 0){
        gameOver();
       }
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColourById(alphabet);
}

function play() {
// hide everything show only the playground
    hideElementById('home-screan');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('last-score', lastScore);

    // clear the last highlited alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColourById(currentAlphabet);
}