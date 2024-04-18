

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
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

       if(newLife === 0){
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
    hideElementById('home-screan');
    hideElementById('final-score');
    showElementById('play-ground');



    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}