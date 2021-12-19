const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElements = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })


function startGame() {
    startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElements.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
  
  const questions = [
    {
      question: 'What is Javascript?',
      answers: [
        { text: 'a client-side and server-side script language inserted into Html pages', correct: true },
        { text: 'Subject-based Programming language', correct: false }
      ]
    },
    {
      question: 'Who is the best Spider Man actor?',
      answers: [
        { text: 'Tom Holand', correct: true },
        { text: 'Toby Maguire', correct: false },
        { text: 'Andrew Garfield', correct: false },
        { text: 'Nicolas Hammond', correct: false }
      ]
    },
    {
      question: 'What is the difference between Java & JavaScript?',
      answers: [
        { text: 'Javascript is an OOP programming language.', correct: false },
        { text: 'Java code needs to be compiled.', correct: true },
        { text: 'Java codes are all in the form of text.', correct: false },
        { text: 'Java is run on a browser only.', correct: false }
      ]
    },
    {
        question: 'Which company developed JavaScript?',
        answers: [
          { text: 'Google developed Javascript.', correct: false },
          { text: 'Elon Musk developed Javascript', correct: false },
          { text: 'Netscape is the software company that developed JavaScript.', correct: true },
          { text: 'Yahoo pages created Javascript', correct: false }
        ]
      },
      {
        question: 'What is a prompt box?',
        answers: [
          { text: 'A box that is often used if you want to make sure information comes through to the user.', correct: false },
          { text: 'A prompt box is a box that allows the user to enter input by providing a text box.', correct: true },
          { text: 'A box used if you want the user to verify or accept something.', correct: false },
          { text: 'To display line breaks inside a popup box, use a back-slash followed by the character n.', correct: false }
        ]
      },
      {
        question: 'What are all the looping structures in JavaScript?',
        answers: [
          { text: 'GetElementBy', correct: false },
          { text: 'For', correct: true },
          { text: 'While', correct: true },
          { text: 'Do-while loops.', correct: true }
        ]
      },
    {
      question: 'What are some data types supported by JavaScript?',
      answers: [
        { text: 'String', correct: true },
        { text: 'Undefined', correct: true },
        { text: 'Null', correct: true },
        { text: 'Boolean', correct: true }
      ]
    }
  ]