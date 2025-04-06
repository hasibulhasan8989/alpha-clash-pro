// hide and show function

function hideElementById(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}

function showElementById(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}

// get any random alphabet function

function getRandomAlphabet() {
  const string = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = string.split("");

  const randomNum = Math.random() * 25;
  const number = Math.round(randomNum);

  const randomAlphabet = alphabets[number];
  return randomAlphabet;
}

// keyboard color set and remove

function setBackgroundColorById(keyElement) {
  const element = document.getElementById(keyElement);
  element.classList.add("text-orange-800");
  element.classList.add("text-2xl");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("text-orange-800");
  element.classList.remove("text-2xl");
}

// common int value find and set function

function getIntValueById(getId) {
  const getElement = document.getElementById(getId);
  const getText = getElement.innerText;
  const getValue = parseInt(getText);
  return getValue;
}

function setIntValueById(getId, value) {
  const setElement = document.getElementById(getId);
  setElement.innerText = value;
}

// find any element inner text

function getInnerText(elementId){
   const element=document.getElementById(elementId)
   const innerText=element.innerText.toLocaleLowerCase()
   return innerText
}