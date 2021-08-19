let myImage = document.querySelector('img')

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src')
  if (mySrc === './images/img/malamute.jpg') {
    myImage.setAttribute('src', './images/img/malamuteonnature.jpg')
  } else if (mySrc === './images/img/malamuteonnature.jpg') {
    myImage.setAttribute('src', './images/img/blackmalamute.jpg')
  } else {
    myImage.setAttribute('src', './images/img/malamute.jpg')
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h2')

function setUserName() {
  let myName = prompt('Please enter your name.')
  if (!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.innerHTML = `Welcome,${myName}!`
  }
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  let storedName = localStorage.getItem('name')
  myHeading.innerHTML = `Welcome,${storedName}!`
}

myButton.onclick = function () {
  setUserName()
}
