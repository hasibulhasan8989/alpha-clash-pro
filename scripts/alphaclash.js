// function homeScreen(){
//     document.getElementById('homeScreen').classList.add('hidden')
//     document.getElementById('playScreen').classList.remove('hidden')

// }

function continuePlay() {
   const randomAlphabet= getRandomAlphabet()
   
   document.getElementById('displayText').innerText=randomAlphabet
   console.log(randomAlphabet)

   setBackgroundColorById(randomAlphabet)
}

function homeScreen(){
    hideElementById('homeScreen')
    showElementById('playScreen')
    continuePlay()
}