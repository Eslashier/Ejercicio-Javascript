const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const exitButton = document.getElementById('exit-btn')
const scoreButton = document.getElementById('score-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


fetch("https://api.jsonbin.io/b/6261f493c5284e3115511492")
.then(respose => respose.json())
.then(data => console.log(data))




