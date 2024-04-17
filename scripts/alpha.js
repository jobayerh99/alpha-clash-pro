function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColourById(alphabet);
}

function play(){
    hideElementById('home-screan');
    showElementById('play-ground');
    continueGame()
}