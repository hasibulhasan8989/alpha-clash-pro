function hideElementById(elementId){
    document.getElementById(elementId).classList.add('hidden')
}

function showElementById(elementId){
    document.getElementById(elementId).classList.remove('hidden')
}

function getRandomAlphabet(){
    const string='abcdefghijklmnopqrstuvwxyz'
    const alphabets=string.split('')
    
    const randomNum=Math.random()*25
    const number=Math.round(randomNum)
    
    const randomAlphabet=alphabets[number]
    return randomAlphabet;
}

function setBackgroundColorById(keyElement){

    const element=document.getElementById(keyElement)
    element.classList.add('text-orange-800')
    element.classList.add('text-2xl')
    
    

}