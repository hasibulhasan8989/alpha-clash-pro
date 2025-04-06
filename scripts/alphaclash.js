// function homeScreen(){
//     document.getElementById('homeScreen').classList.add('hidden')
//     document.getElementById('playScreen').classList.remove('hidden')

// }
// keyBoard Function
document.addEventListener("keyup", keyPress);

function keyPress(element) {
  let scoreCount = 0;
  const playerPress = element.key;
 if(playerPress==='Escape'){
    finalScore()
 }

  const expectedPressUppercase =
    document.getElementById("displayText").innerText;
  const expectedPress = expectedPressUppercase.toLocaleLowerCase();

  if (playerPress === expectedPress) {
    continuePlay();
    removeBackgroundColorById(playerPress);

    const score = getIntValueById("scoreBoard");
    const newScore = score + 1;
    setIntValueById("scoreBoard", newScore);
    setIntValueById("final-score", newScore);
  } else {
    const life = getIntValueById("lifeBoard");
    const newLife = life - 1;
    setIntValueById("lifeBoard", newLife);

    if (newLife <= 0) {
      finalScore();
    }
  }
}

// continue playSection
function continuePlay() {
  const randomAlphabet = getRandomAlphabet();

  document.getElementById("displayText").innerText = randomAlphabet;

  setBackgroundColorById(randomAlphabet);
}

function homeScreen() {
  hideElementById("homeScreen");
  showElementById("playScreen");
  continuePlay();
}

function finalScore() {
  hideElementById("playScreen");
  showElementById("finalScoreBoard");
}

function tryAgain() {
  showElementById("playScreen");
  hideElementById("finalScoreBoard");
  const removeColTxt= getInnerText('displayText')
  
  removeBackgroundColorById(removeColTxt)

  continuePlay();
  setIntValueById('scoreBoard',0)
  setIntValueById('lifeBoard',5)

  
  

}

// function tryAgain(){
//     hideElementById('finalScoreBoard')
//     showElementById('playScreen')

// }
