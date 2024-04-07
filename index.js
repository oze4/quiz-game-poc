// Declaring variables

let startDiv = document.getElementById('start-div');
let startDivLeft = document.getElementById('start-div-left');
let startDivright = document.getElementById('start-div-right');
let startDivMiddleLeft = document.getElementById('start-div-middle-left');
let startDivMiddleRight = document.getElementById('start-div-middle-right');
let startDivTop = document.getElementById('start-div-top');
let startDivBottom = document.getElementById('start-div-bottom');
let startScreenComponents = document.querySelectorAll('.start-screen')
let mainMenu = document.getElementById('main-menu');
let play = document.getElementById('play');
let settings = document.getElementById('settings');
let mainMenuBtns = document.getElementById('main-menu-buttons');
let settingsScreen = document.getElementById('settings-screen')
let playersCountScreen = document.getElementById('players-count-screen');
let body = document.getElementById('body');
let questionsListBtn = document.createElement('button');
let questionsArray = [];
let correctAnswer;
let wrongAnswers = [];
let numsArr = [0, 1, 2];
let numOfPlayers = 0;
let turn = 0;
let gameScreen = document.getElementById('game-screen');
let endScreen = document.getElementById('end-screen');

// INTRO SCREEN CODE

let randomIntroNum = Math.round(Math.random() * 3);

if (randomIntroNum === 0) {
  startDivMiddleLeft.remove();
  startDivMiddleRight.remove();
  startDivright.remove();
  startDivLeft.remove();
  startDiv.style.width = 'auto';
  startDivBottom.style.width = 'auto';
  startDivTop.style.width = 'auto';
  startDiv.style.height = '10vh';
  startDivBottom.style.height = '50vh';
  startDivTop.style.height = '15vh';
  startDivBottom.style.borderRadius = '20px';
  startDivTop.style.borderRadius = '20px';
  startDivTop.style.border = '10px solid white';
  startDivBottom.style.border = '10px solid white';
  startDiv.style.borderRight = '10px solid white';
  startDiv.style.borderLeft = '10px solid white';
  body.style.gridTemplateColumns = '15vh 50vh 15vh';
  body.style.gridTemplateRows = '20vh 10vh 50vh';
  startDiv.style.gridArea = '2 / 2 / 3 / 3';
  startDivBottom.style.gridArea = '3 / 1 / 4 / 4';
  startDivTop.style.gridArea = '1 / 1 / 2 / 4';
  startDivTop.style.border = '10px solid rgb(192, 140, 26)';
  startDivBottom.style.border = '10px solid rgb(192, 140, 26)';
  startDiv.style.borderRight = '10px solid rgb(192, 140, 26)';
  startDiv.style.borderLeft = '10px solid rgb(192, 140, 26)';
} else if (randomIntroNum === 1) {
  body.style.gridTemplateColumns = '10vh 5vh 50vh 5vh 10vh';
  body.style.gridTemplateRows = '20vh 10vh 50vh';
  startDiv.style.gridArea = '2 / 3 / 3 / 4';
  startDivBottom.style.gridArea = '3 / 3 / 4 / 4';
  startDivTop.style.gridArea = '1 / 3 / 2 / 4';
  startDivright.style.gridArea = '3 / 5 / 4 / 6';
  startDivMiddleRight.style.gridArea = '3 / 4 / 4 / 5';
  startDivLeft.style.gridArea = '3 / 1 / 4 / 2';
  startDivMiddleLeft.style.gridArea = '3 / 2 / 4 / 3';
  startDiv.style.height = '10vh';
  startDivBottom.style.height = '50vh';
  startDivTop.style.height = '15vh';
  startDivBottom.style.border = '10px solid white';
  startDivBottom.style.borderRadius = '0px';
  startDiv.style.width = '30vh';
  startDiv.style.justifySelf = 'center';
  startDivTop.style.border = '10px solid white';
  startDivTop.style.borderRadius = '0px';
  startDivright.style.borderRadius = '0px';
  startDivLeft.style.borderRadius = '0px';
  startDivBottom.style.width = '50vh';
  startDivTop.style.justifySelf = 'center';
  startDivTop.style.width = '50vh';
  startDiv.style.borderRight = '10px solid rgb(29, 151, 54)';
  startDiv.style.borderLeft = '10px solid rgb(29, 151, 54)';
  startDivBottom.style.border = '10px solid rgb(29, 151, 54)';
  startDivMiddleLeft.style.borderTop = '10px solid rgb(29, 151, 54)';
  startDivMiddleLeft.style.borderBottom = '10px solid rgb(29, 151, 54)';
  startDivMiddleRight.style.borderTop = '10px solid rgb(29, 151, 54)';
  startDivMiddleRight.style.borderBottom = '10px solid rgb(29, 151, 54)';
  startDivTop.style.border = '10px solid rgb(29, 151, 54)';
  startDivright.style.border = '10px solid rgb(29, 151, 54)';
  startDivLeft.style.border = '10px solid rgb(29, 151, 54)';
} else if (randomIntroNum === 2) {
  body.style.gridTemplateColumns = '15vh 5vh 40vh 5vh 15vh';
  body.style.gridTemplateRows = 'repeat(3, 1fr)';
  startDivTop.style.width = '20vh';
  startDivBottom.style.width = '20vh';
  startDivTop.style.justifySelf = 'center';
  startDivBottom.style.justifySelf = 'center';
  startDivTop.style.border = '10px solid rgb(77, 19, 159)';
  startDivTop.style.borderBottom = 'none';
  startDiv.style.border = '10px solid rgb(77, 19, 159)';
  startDivLeft.style.border = '10px solid rgb(77, 19, 159)';
  startDivright.style.border = '10px solid rgb(77, 19, 159)';
  startDivMiddleLeft.style.borderTop = '10px solid rgb(77, 19, 159)';
  startDivMiddleLeft.style.borderBottom = '10px solid rgb(77, 19, 159)';
  startDivMiddleRight.style.borderTop = '10px solid rgb(77, 19, 159)';
  startDivMiddleRight.style.borderBottom = '10px solid rgb(77, 19, 159)';
  startDivBottom.style.border = '10px solid rgb(77, 19, 159)';
  startDivBottom.style.borderTop = 'none';
  startDiv.style.border = '10px solid rgb(77, 19, 159)';
  startDivTop.style.borderRadius = '0px';
  startDivBottom.style.borderRadius = '0px';
  startDivright.style.borderRadius = '0px';
  startDivLeft.style.borderRadius = '0px';
}

// Adding eventListeners

startScreenComponents.forEach(function (component) {
  component.addEventListener('click', function () {
    for (let i = 0; i < startScreenComponents.length; i++) {
      if (randomIntroNum === 0) {
        startScreenComponents[i].style.animationName = 'start-button-lightup0';
      } else if (randomIntroNum === 1) {
        startScreenComponents[i].style.animationName = 'start-button-lightup1';
      } else if (randomIntroNum === 2) {
        startScreenComponents[i].style.animationName = 'start-button-lightup2';
      } else if (randomIntroNum === 3) {
        startScreenComponents[i].style.animationName = 'start-button-lightup';
      }
    }
    setTimeout(() => {
      for (let i = 0; i < startScreenComponents.length; i++) {
        startScreenComponents[i].style.display = 'none';
      }
      body.style.display = 'flex';
      mainMenu.style.display = 'flex';
      mainMenu.style.animationName = 'text-showup';
      mainMenu.style.color = 'white';
      if (randomIntroNum === 0) {
        mainMenu.style.background = 'rgb(255, 174, 0)';
      } else if (randomIntroNum === 1) {
        mainMenu.style.background = 'rgb(0, 255, 51)';
      } else if (randomIntroNum === 2) {
        mainMenu.style.background = 'rgb(106, 0, 255)';
      } else if (randomIntroNum === 3) {
        mainMenu.style.background = 'rgb(0, 255, 255)';
      }
      startDiv.remove();
      startDivBottom.remove();
      startDivTop.remove();
      startDivright.remove();
      startDivLeft.remove();
      startDivMiddleRight.remove();
      startDivMiddleLeft.remove();
    }, 5000);

  });
});

// MAIN MENU SCREEN CODE

// Setting button code

settings.addEventListener('click', function () {
  mainMenuBtns.style.pointerEvents = 'none';
  settingsScreen.style.display = 'grid';
  settingsScreen.style.animationName = 'settings-screen-showup';
  settingsScreen.style.height = '85vh';
  settingsScreen.style.width = '85vh';
  settingsScreen.style.color = 'white';
  if (randomIntroNum === 0) {
    settingsScreen.style.backgroundColor = 'rgb(255, 174, 0)';
  } else if (randomIntroNum === 1) {
    settingsScreen.style.backgroundColor = 'rgb(0, 255, 51)';
  } else if (randomIntroNum === 2) {
    settingsScreen.style.backgroundColor = 'rgb(106, 0, 255)';
  } else if (randomIntroNum === 3) {
    settingsScreen.style.backgroundColor = 'rgb(0, 255, 255)';
  };

  setTimeout(() => {

    //Making the document elements

    let inputQuestionArea = document.createElement('input');
    let answer1Area = document.createElement('input');
    let answer2Area = document.createElement('input');
    let answer3Area = document.createElement('input');
    let answer4Area = document.createElement('input');
    let confirmQuestionBtn = document.createElement('button');
    let returnBtn = document.createElement('button');
    let errorMsg = document.createElement('h4');

    let answer1RadioBtn = document.createElement('input');
    answer1RadioBtn.setAttribute('type', 'radio');
    answer1RadioBtn.setAttribute('name', 'answerRadio');

    let answer2RadioBtn = document.createElement('input');
    answer2RadioBtn.setAttribute('type', 'radio');
    answer2RadioBtn.setAttribute('name', 'answerRadio');

    let answer3RadioBtn = document.createElement('input');
    answer3RadioBtn.setAttribute('type', 'radio');
    answer3RadioBtn.setAttribute('name', 'answerRadio');

    let answer4RadioBtn = document.createElement('input');
    answer4RadioBtn.setAttribute('type', 'radio');
    answer4RadioBtn.setAttribute('name', 'answerRadio');

    //Changing the colors

    if (randomIntroNum === 0) {
      inputQuestionArea.style.backgroundColor = 'rgb(192, 140, 26)';
      confirmQuestionBtn.style.backgroundColor = 'rgb(192, 140, 26)';
      questionsListBtn.style.backgroundColor = 'rgb(192, 140, 26)';
      returnBtn.style.backgroundColor = 'rgb(192, 140, 26)';
      answer1Area.style.backgroundColor = 'rgb(192, 140, 26)';
      answer2Area.style.backgroundColor = 'rgb(192, 140, 26)';
      answer3Area.style.backgroundColor = 'rgb(192, 140, 26)';
      answer4Area.style.backgroundColor = 'rgb(192, 140, 26)';
    } else if (randomIntroNum === 1) {
      inputQuestionArea.style.backgroundColor = 'rgb(29, 151, 54)';
      confirmQuestionBtn.style.backgroundColor = 'rgb(29, 151, 54)';
      questionsListBtn.style.backgroundColor = 'rgb(29, 151, 54)';
      returnBtn.style.backgroundColor = 'rgb(29, 151, 54)';
      answer1Area.style.backgroundColor = 'rgb(29, 151, 54)';
      answer2Area.style.backgroundColor = 'rgb(29, 151, 54)';
      answer3Area.style.backgroundColor = 'rgb(29, 151, 54)';
      answer4Area.style.backgroundColor = 'rgb(29, 151, 54)';
    } else if (randomIntroNum === 2) {
      inputQuestionArea.style.backgroundColor = 'rgb(77, 19, 159)';
      confirmQuestionBtn.style.backgroundColor = 'rgb(77, 19, 159)';
      questionsListBtn.style.backgroundColor = 'rgb(77, 19, 159)';
      returnBtn.style.backgroundColor = 'rgb(77, 19, 159)';
      answer1Area.style.backgroundColor = 'rgb(77, 19, 159)';
      answer2Area.style.backgroundColor = 'rgb(77, 19, 159)';
      answer3Area.style.backgroundColor = 'rgb(77, 19, 159)';
      answer4Area.style.backgroundColor = 'rgb(77, 19, 159)';
    } else if (randomIntroNum === 3) {
      inputQuestionArea.style.backgroundColor = 'rgb(59, 167, 167)';
      confirmQuestionBtn.style.backgroundColor = 'rgb(59, 167, 167)';
      questionsListBtn.style.backgroundColor = 'rgb(59, 167, 167)';
      returnBtn.style.backgroundColor = 'rgb(59, 167, 167)';
      answer1Area.style.backgroundColor = 'rgb(59, 167, 167)';
      answer2Area.style.backgroundColor = 'rgb(59, 167, 167)';
      answer3Area.style.backgroundColor = 'rgb(59, 167, 167)';
      answer4Area.style.backgroundColor = 'rgb(59, 167, 167)';
    };

    //Adding classes and texts to the document elements

    inputQuestionArea.classList.add('input-question');
    confirmQuestionBtn.classList.add('confirm-question');
    questionsListBtn.classList.add('questions-list-button');
    errorMsg.classList.add('error-message');
    returnBtn.classList.add('return-button');
    returnBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
    confirmQuestionBtn.innerText = 'إضافة (Add)';
    questionsListBtn.innerHTML = '<i class="fa-solid fa-list"></i>';
    answer1Area.classList.add('answer1-area', 'answer-area');
    answer2Area.classList.add('answer2-area', 'answer-area');
    answer3Area.classList.add('answer3-area', 'answer-area');
    answer4Area.classList.add('answer4-area', 'answer-area');

    answer1RadioBtn.classList.add('answer1-radio', 'radio-button');
    answer2RadioBtn.classList.add('answer2-radio', 'radio-button');
    answer3RadioBtn.classList.add('answer3-radio', 'radio-button');
    answer4RadioBtn.classList.add('answer4-radio', 'radio-button');

    //Adding functionality to the confirm question button

    confirmQuestionBtn.addEventListener('click', function () {

      if (inputQuestionArea.value != '') {
        if (answer1Area.value != '' && answer2Area.value != '' && answer3Area.value != '' && answer4Area.value != '') {
          if (answer1RadioBtn.checked || answer2RadioBtn.checked || answer3RadioBtn.checked || answer4RadioBtn.checked) {
            if (answer1RadioBtn.checked) {
              correctAnswer = answer1Area.value
              wrongAnswers.push(answer2Area.value)
              wrongAnswers.push(answer3Area.value)
              wrongAnswers.push(answer4Area.value)
            } else if (answer2RadioBtn.checked) {
              correctAnswer = answer2Area.value
              wrongAnswers.push(answer1Area.value)
              wrongAnswers.push(answer3Area.value)
              wrongAnswers.push(answer4Area.value)
            } else if (answer3RadioBtn.checked) {
              correctAnswer = answer3Area.value
              wrongAnswers.push(answer1Area.value)
              wrongAnswers.push(answer2Area.value)
              wrongAnswers.push(answer4Area.value)
            } else if (answer4RadioBtn.checked) {
              correctAnswer = answer4Area.value
              wrongAnswers.push(answer1Area.value)
              wrongAnswers.push(answer2Area.value)
              wrongAnswers.push(answer3Area.value)
            }

            numsArr.sort(() => Math.random() - 0.5);

            let question = {
              theQuestion: inputQuestionArea.value,
              correct: correctAnswer,
              wrongAnswer1: wrongAnswers[numsArr[0]],
              wrongAnswer2: wrongAnswers[numsArr[1]],
              wrongAnswer3: wrongAnswers[numsArr[2]],
            };

            questionsArray.push(question);

            inputQuestionArea.value = '';
            answer1Area.value = '';
            answer2Area.value = '';
            answer3Area.value = '';
            answer4Area.value = '';
            answer1RadioBtn.checked = false;
            answer2RadioBtn.checked = false;
            answer3RadioBtn.checked = false;
            answer4RadioBtn.checked = false;
            wrongAnswers = [];
            errorMsg.innerText = '';
          } else {
            errorMsg.innerText = 'هناك بيانات ناقصة (Missing Data)';
          }
        } else {
          errorMsg.innerText = 'هناك بيانات ناقصة (Missing Data)';
        }
      } else {
        errorMsg.innerText = 'هناك بيانات ناقصة (Missing Data)';
      }

    });

    // Return button eventListener

    returnBtn.addEventListener('click', function () {
      inputQuestionArea.style.animationName = 'disappear';
      confirmQuestionBtn.style.animationName = 'disappear';
      returnBtn.style.animationName = 'disappear';
      questionsListBtn.style.animationName = 'disappear';
      answer1Area.style.animationName = 'disappear';
      answer2Area.style.animationName = 'disappear';
      answer3Area.style.animationName = 'disappear';
      answer4Area.style.animationName = 'disappear';
      answer1RadioBtn.style.animationName = 'disappear';
      answer2RadioBtn.style.animationName = 'disappear';
      answer3RadioBtn.style.animationName = 'disappear';
      answer4RadioBtn.style.animationName = 'disappear';
      errorMsg.innerText = '';
      setTimeout(() => {
        inputQuestionArea.remove();
        confirmQuestionBtn.remove();
        returnBtn.remove();
        questionsListBtn.remove();
        answer1Area.remove();
        answer2Area.remove();
        answer3Area.remove();
        answer4Area.remove();
        answer1RadioBtn.remove();
        answer2RadioBtn.remove();
        answer3RadioBtn.remove();
        answer4RadioBtn.remove();
        errorMsg.remove();
        settingsScreen.style.animationName = 'settings-screen-disappear'
        setTimeout(() => {
          settingsScreen.style.display = 'none';
          mainMenuBtns.style.pointerEvents = 'auto';
        }, 1500);
      }, 750);
    });

    //Appending the document elements to the settingsScreen variable

    settingsScreen.appendChild(inputQuestionArea);
    settingsScreen.appendChild(confirmQuestionBtn);
    settingsScreen.appendChild(questionsListBtn);
    settingsScreen.appendChild(errorMsg);
    settingsScreen.appendChild(returnBtn);
    settingsScreen.appendChild(answer1Area);
    settingsScreen.appendChild(answer2Area);
    settingsScreen.appendChild(answer3Area);
    settingsScreen.appendChild(answer4Area);
    settingsScreen.appendChild(answer1RadioBtn);
    settingsScreen.appendChild(answer2RadioBtn);
    settingsScreen.appendChild(answer3RadioBtn);
    settingsScreen.appendChild(answer4RadioBtn);

    //Adding the animations code to the document elements

    inputQuestionArea.style.animationName = 'appear';
    confirmQuestionBtn.style.animationName = 'appear';
    returnBtn.style.animationName = 'appear';
    questionsListBtn.style.animationName = 'appear';
    errorMsg.style.animationName = 'appear';

    answer1Area.style.animationName = 'appear';
    answer2Area.style.animationName = 'appear';
    answer3Area.style.animationName = 'appear';
    answer4Area.style.animationName = 'appear';

    answer1RadioBtn.style.animationName = 'appear';
    answer2RadioBtn.style.animationName = 'appear';
    answer3RadioBtn.style.animationName = 'appear';
    answer4RadioBtn.style.animationName = 'appear';
  }, 3000);
});

//Adding functionality to the questions list button

questionsListBtn.addEventListener('click', function () {

  settingsScreen.style.pointerEvents = 'none';
  settingsScreen.style.opacity = '50%';

  //Declaring variables

  let listScreen = document.createElement('div');
  let listScreenReturnBtn = document.createElement('button');
  let questionSection = document.createElement('div');
  let questionsUl = document.createElement('ul');

  //Changing the colors

  if (randomIntroNum === 0) {
    listScreen.style.backgroundColor = 'rgb(255, 174, 0)';
    listScreenReturnBtn.style.backgroundColor = 'rgb(192, 140, 26)';
    questionSection.style.backgroundColor = 'rgb(192, 140, 26)';
    questionsUl.style.backgroundColor = 'rgb(192, 140, 26)';

  } else if (randomIntroNum === 1) {
    listScreen.style.backgroundColor = 'rgb(0, 255, 51)';
    listScreenReturnBtn.style.backgroundColor = 'rgb(29, 151, 54)';
    questionSection.style.backgroundColor = 'rgb(29, 151, 54)';
    questionsUl.style.backgroundColor = 'rgb(29, 151, 54)';
  } else if (randomIntroNum === 2) {
    listScreen.style.backgroundColor = 'rgb(106, 0, 255)';
    listScreenReturnBtn.style.backgroundColor = 'rgb(77, 19, 159)';
    questionSection.style.backgroundColor = 'rgb(77, 19, 159)';
    questionsUl.style.backgroundColor = 'rgb(77, 19, 159)';
  } else if (randomIntroNum === 3) {
    listScreen.style.backgroundColor = 'rgb(0, 255, 255)';
    listScreenReturnBtn.style.backgroundColor = 'rgb(59, 167, 167)';
    questionSection.style.backgroundColor = 'rgb(59, 167, 167)';
    questionsUl.style.backgroundColor = 'rgb(59, 167, 167)';
  };

  //Some appending

  mainMenu.appendChild(listScreen);

  //Adding classes and inner text/inner HTML

  listScreen.classList.add('list-screen');
  listScreenReturnBtn.classList.add('list-screen-return-button');
  listScreenReturnBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
  listScreenReturnBtn.animationName = 'appear';

  questionSection.classList.add('question-section');
  questionsUl.classList.add('questions-ul');

  //Adding animations code and style code

  listScreen.style.display = 'grid';
  listScreen.style.animationName = 'settings-screen-showup';
  listScreen.style.height = '85vh';
  listScreen.style.width = '85vh';
  listScreen.style.color = 'white';

  setTimeout(() => {
    listScreenReturnBtn.style.animationName = 'appear';
    questionsUl.style.animationName = 'appear';
    questionSection.style.animationName = 'appear';
    setTimeout(() => {
      listScreenReturnBtn.style.opacity = '100%';
      questionsUl.style.opacity = '100%';
      questionSection.style.opacity = '100%';
    }, 750);
  }, 1500);

  //Making the questions appear in a list

  for (let i = 0; i < questionsArray.length; i++) {
    let questionOnList = document.createElement('li');

    questionOnList.classList.add('question-on-list');

    let questionTextDiv = document.createElement('div');
    questionTextDiv.classList.add('question-text-div');

    let questionText = document.createElement('h4');
    questionText.classList.add('question-text');

    let deleteQuestionBtn = document.createElement('button');
    deleteQuestionBtn.classList.add('delete-question-button');
    deleteQuestionBtn.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';

    questionTextDiv.appendChild(questionText);
    questionTextDiv.appendChild(deleteQuestionBtn);

    let answer1Display = document.createElement('div');
    let answer2Display = document.createElement('div');
    let answer3Display = document.createElement('div');
    let answer4Display = document.createElement('div');

    if (randomIntroNum === 0) {
      questionOnList.style.backgroundColor = 'rgb(192, 140, 26)';
      questionTextDiv.style.backgroundColor = 'rgb(192, 140, 26)';
    } else if (randomIntroNum === 1) {
      questionOnList.style.backgroundColor = 'rgb(29, 151, 54)';
      questionTextDiv.style.backgroundColor = 'rgb(29, 151, 54)';
    } else if (randomIntroNum === 2) {
      questionOnList.style.backgroundColor = 'rgb(77, 19, 159)';
      questionTextDiv.style.backgroundColor = 'rgb(77, 19, 159)';
    } else if (randomIntroNum === 3) {
      questionOnList.style.backgroundColor = 'rgb(59, 167, 167)';
      questionTextDiv.style.backgroundColor = 'rgb(59, 167, 167)';
    };


    answer1Display.classList.add('answer-display-area', 'answer-1-display');
    answer2Display.classList.add('answer-display-area', 'answer-2-display');
    answer3Display.classList.add('answer-display-area', 'answer-3-display');
    answer4Display.classList.add('answer-display-area', 'answer-4-display');

    let answer1DisplayText = document.createElement('h4');
    answer1DisplayText.classList.add('answer-display-text');
    answer1Display.appendChild(answer1DisplayText);

    let answer2DisplayText = document.createElement('h4');
    answer2DisplayText.classList.add('answer-display-text');
    answer2Display.appendChild(answer2DisplayText);

    let answer3DisplayText = document.createElement('h4');
    answer3DisplayText.classList.add('answer-display-text');
    answer3Display.appendChild(answer3DisplayText);

    let answer4DisplayText = document.createElement('h4');
    answer4DisplayText.classList.add('answer-display-text');
    answer4Display.appendChild(answer4DisplayText);

    questionText.innerText = questionsArray[i].theQuestion;
    answer1DisplayText.innerText = questionsArray[i].correct;
    answer2DisplayText.innerText = questionsArray[i].wrongAnswer1;
    answer3DisplayText.innerText = questionsArray[i].wrongAnswer2;
    answer4DisplayText.innerText = questionsArray[i].wrongAnswer3;

    questionOnList.appendChild(questionTextDiv);
    questionOnList.appendChild(answer1Display);
    questionOnList.appendChild(answer2Display);
    questionOnList.appendChild(answer3Display);
    questionOnList.appendChild(answer4Display);

    //Adding functionality to the delete question button

    deleteQuestionBtn.addEventListener('click', function () {
      questionOnList.remove();
      deleteQuestionBtn.parentElement.remove();
      answer1Display.remove();
      answer2Display.remove();
      answer3Display.remove();
      answer4Display.remove();

      for (let i = 0; i < questionsArray.length; i++) {
        if (questionsArray[i].theQuestion === questionText.innerText) {
          questionsArray.splice(i, 1);
        }
      }

    });

    questionsUl.appendChild(questionOnList);
  }

  questionSection.appendChild(questionsUl);

  //List screen return button

  listScreenReturnBtn.addEventListener('click', function () {

    questionsUl.style.animationName = 'disappear';
    listScreenReturnBtn.style.animationName = 'disappear';
    questionSection.style.animationName = 'disappear';

    setTimeout(() => {
      questionsUl.remove();
      listScreenReturnBtn.remove();
      questionSection.remove();
      listScreen.style.animationName = 'settings-screen-disappear';
      setTimeout(() => {
        listScreen.remove();
        settingsScreen.style.pointerEvents = 'auto';
        settingsScreen.style.opacity = '100%';
      }, 750);

    }, 750);
  });

  //Appending the content of the list screen to the list screen

  listScreen.appendChild(listScreenReturnBtn);
  listScreen.appendChild(questionSection);

});

//Play button code

//Adding an event listerner

play.addEventListener('click', function () {
  mainMenuBtns.style.pointerEvents = 'none';
  playersCountScreen.style.display = 'grid';
  playersCountScreen.style.animationName = 'settings-screen-showup';
  playersCountScreen.style.height = '85vh';
  playersCountScreen.style.width = '85vh';
  playersCountScreen.style.color = 'white';
  if (randomIntroNum === 0) {
    playersCountScreen.style.backgroundColor = 'rgb(255, 174, 0)';
  } else if (randomIntroNum === 1) {
    playersCountScreen.style.backgroundColor = 'rgb(0, 255, 51)';
  } else if (randomIntroNum === 2) {
    playersCountScreen.style.backgroundColor = 'rgb(106, 0, 255)';
  } else if (randomIntroNum === 3) {
    playersCountScreen.style.backgroundColor = 'rgb(0, 255, 255)';
  };

  setTimeout(() => {

    let playersCountScreenUtility = document.createElement('div');
    let twoPlayers = document.createElement('img');
    let threePlayers = document.createElement('img');
    let fourPlayers = document.createElement('img');

    let playersCountScreenReturnBtn = document.createElement('button');
    let playersCountScreenH4 = document.createElement('h4');

    playersCountScreenReturnBtn.classList.add('players-count-screen-return-button');
    playersCountScreenUtility.classList.add('players-count-screen-utility');
    twoPlayers.classList.add('two-players');
    threePlayers.classList.add('three-players');
    fourPlayers.classList.add('four-players');

    if (randomIntroNum === 0) {
      playersCountScreenReturnBtn.style.backgroundColor = 'rgb(192, 140, 26)';
    } else if (randomIntroNum === 1) {
      playersCountScreenReturnBtn.style.backgroundColor = 'rgb(29, 151, 54)';
    } else if (randomIntroNum === 2) {
      playersCountScreenReturnBtn.style.backgroundColor = 'rgb(77, 19, 159)';
    } else if (randomIntroNum === 3) {
      playersCountScreenReturnBtn.style.backgroundColor = 'rgb(59, 167, 167)';
    };

    playersCountScreenReturnBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
    playersCountScreenH4.innerText = 'اختر عدد اللاعبين';

    playersCountScreenUtility.appendChild(playersCountScreenReturnBtn);
    playersCountScreenUtility.appendChild(playersCountScreenH4);

    playersCountScreenUtility.style.animationName = 'appear';
    twoPlayers.style.animationName = 'appear';
    threePlayers.style.animationName = 'appear';
    fourPlayers.style.animationName = 'appear';

    twoPlayers.src = `./pic.png`;
    threePlayers.src = `./pic.png`;
    fourPlayers.src = `./pic.png`;

    function startGame(numChosen) {
      playersCountScreenUtility.style.animationName = 'disappear';
      twoPlayers.style.animationName = 'disappear';
      threePlayers.style.animationName = 'disappear';
      fourPlayers.style.animationName = 'disappear';

      setTimeout(() => {

        playersCountScreenUtility.style.animationName = 'disappear';
        twoPlayers.style.animationName = 'disappear';
        threePlayers.style.animationName = 'disappear';
        fourPlayers.style.animationName = 'disappear';

        setTimeout(() => {
          playersCountScreenUtility.remove();
          twoPlayers.remove();
          threePlayers.remove();
          fourPlayers.remove();
          playersCountScreen.style.animationName = 'settings-screen-disappear';
          setTimeout(() => {
            playersCountScreen.style.display = 'none';
            mainMenuBtns.remove();
          }, 750);

          setTimeout(() => {
            gameScreen.style.display = 'grid';
            gameScreen.style.animationName = 'appear';
            setTimeout(() => {
              gameScreen.style.opacity = '100%';
            }, 1500);
          }, 1000);
        }, 750);

        numOfPlayers = numChosen;

        let scoreBoard = document.createElement('div');
        let questionsRemaining = document.createElement('div');
        let askQuestion = document.createElement('div');

        scoreBoard.classList.add('score-board');
        questionsRemaining.classList.add('questions-remaining');
        askQuestion.classList.add('ask-question');

        if (turn === 0) {
          askQuestion.style.backgroundColor = 'rgb(255, 174, 0)';
          gameScreen.style.backgroundImage = './litOrangeBackground.jpg';
        } else if (turn === 1) {
          askQuestion.style.backgroundColor = 'rgb(0, 255, 51)';
          gameScreen.style.backgroundImage = './litGreenBackground.jpg';
        } else if (turn === 2) {
          askQuestion.style.backgroundColor = 'rgb(106, 0, 255)';
          gameScreen.style.backgroundImage = './litPurpleBackground.jpg';
        } else if (turn === 3) {
          askQuestion.style.backgroundColor = 'rgb(0, 255, 255)';
          gameScreen.style.backgroundImage = './litBlueBackground.jpg';
        }

        askQuestion.innerHTML = '<i class="fa-solid fa-question"></i>';

        gameScreen.appendChild(askQuestion);

        //Scoreboard content

        if (numOfPlayers === 2) {

          questionsRemaining.textContent = `عدد الاسئلة الباقية: ${questionsArray.length}`;

          let player1Section = document.createElement('div');
          let player1Icon = document.createElement('img');
          let player1Score = document.createElement('h4');
          let player1ScoreNum = 0;

          player1Section.classList.add('player-section');
          player1Icon.classList.add('player-section-item');
          player1Score.classList.add('player-section-item');

          player1Icon.src = `.pic.png`;
          player1Score.textContent = player1ScoreNum;

          player1Section.appendChild(player1Icon);
          player1Section.appendChild(player1Score);

          scoreBoard.appendChild(player1Section);

          let player2Section = document.createElement('div');
          let player2Icon = document.createElement('img');
          let player2Score = document.createElement('h4');
          let player2ScoreNum = 0;

          player2Section.classList.add('player-section');
          player2Icon.classList.add('player-section-item');
          player2Score.classList.add('player-section-item');

          player2Icon.src = `pic.png`;
          player2Score.textContent = player2ScoreNum;

          player2Section.appendChild(player2Icon);
          player2Section.appendChild(player2Score);


          scoreBoard.appendChild(player2Section);

          gameScreen.appendChild(scoreBoard);
          gameScreen.appendChild(questionsRemaining);
        } else if (numOfPlayers === 3) {
          questionsRemaining.textContent = `عدد الاسئلة الباقية: ${questionsArray.length}`;

          let player1Section = document.createElement('div');
          let player1Icon = document.createElement('img');
          let player1Score = document.createElement('h4');
          let player1ScoreNum = 0;

          player1Section.classList.add('player-section');
          player1Icon.classList.add('player-section-item');
          player1Score.classList.add('player-section-item');

          player1Icon.src = `pic.png`;
          player1Score.textContent = player1ScoreNum;

          player1Section.appendChild(player1Icon);
          player1Section.appendChild(player1Score);

          scoreBoard.appendChild(player1Section);

          let player2Section = document.createElement('div');
          let player2Icon = document.createElement('img');
          let player2Score = document.createElement('h4');
          let player2ScoreNum = 0;

          player2Section.classList.add('player-section');
          player2Icon.classList.add('player-section-item');
          player2Score.classList.add('player-section-item');

          player2Icon.src = `pic.png`;
          player2Score.textContent = player2ScoreNum;

          player2Section.appendChild(player2Icon);
          player2Section.appendChild(player2Score);

          scoreBoard.appendChild(player2Section);

          let player3Section = document.createElement('div');
          let player3Icon = document.createElement('img');
          let player3Score = document.createElement('h4');
          let player3ScoreNum = 0;

          player3Section.classList.add('player-section');
          player3Icon.classList.add('player-section-item');
          player3Score.classList.add('player-section-item');

          player3Icon.src = `pic.png`;
          player3Score.textContent = player3ScoreNum;

          player3Section.appendChild(player3Icon);
          player3Section.appendChild(player3Score);

          scoreBoard.appendChild(player3Section);

          gameScreen.appendChild(scoreBoard);
          gameScreen.appendChild(questionsRemaining);
        } else if (numOfPlayers === 4) {
          questionsRemaining.textContent = `عدد الاسئلة الباقية: ${questionsArray.length}`;

          let player1Section = document.createElement('div');
          let player1Icon = document.createElement('img');
          let player1Score = document.createElement('h4');
          let player1ScoreNum = 0;

          player1Section.classList.add('player-section');
          player1Icon.classList.add('player-section-item');
          player1Score.classList.add('player-section-item');

          player1Icon.src = `pic.png`;
          player1Score.textContent = player1ScoreNum;

          player1Section.appendChild(player1Icon);
          player1Section.appendChild(player1Score);

          scoreBoard.appendChild(player1Section);

          let player2Section = document.createElement('div');
          let player2Icon = document.createElement('img');
          let player2Score = document.createElement('h4');
          let player2ScoreNum = 0;

          player2Section.classList.add('player-section');
          player2Icon.classList.add('player-section-item');
          player2Score.classList.add('player-section-item');

          player2Icon.src = `pic.png`;
          player2Score.textContent = player2ScoreNum;

          player2Section.appendChild(player2Icon);
          player2Section.appendChild(player2Score);

          scoreBoard.appendChild(player2Section);

          let player3Section = document.createElement('div');
          let player3Icon = document.createElement('img');
          let player3Score = document.createElement('h4');
          let player3ScoreNum = 0;

          player3Section.classList.add('player-section');
          player3Icon.classList.add('player-section-item');
          player3Score.classList.add('player-section-item');

          player3Icon.src = `pic.png`;
          player3Score.textContent = player3ScoreNum;

          player3Section.appendChild(player3Icon);
          player3Section.appendChild(player3Score);

          scoreBoard.appendChild(player3Section);

          let player4Section = document.createElement('div');
          let player4Icon = document.createElement('img');
          let player4Score = document.createElement('h4');
          let player4ScoreNum = 0;

          player4Section.classList.add('player-section');
          player4Icon.classList.add('player-section-item');
          player4Score.classList.add('player-section-item');

          player4Icon.src = `pic.png`;
          player4Score.textContent = player4ScoreNum;

          player4Section.appendChild(player4Icon);
          player4Section.appendChild(player4Score);

          scoreBoard.appendChild(player4Section);

          gameScreen.appendChild(scoreBoard);
          gameScreen.appendChild(questionsRemaining);
        }

        askQuestion.addEventListener('click', function () {

          let askedQuestion = document.createElement('div');
          askedQuestion.classList.add('asked-question');
          askedQuestion.style.display = 'grid';
          askedQuestion.style.animationName = 'settings-screen-showup';
          askedQuestion.style.height = '85vh';
          askedQuestion.style.width = '85vh';
          askedQuestion.style.color = 'white';

          let questionSelectedDiv = document.createElement('div');
          let answerChoice1 = document.createElement('div');
          let answerChoice2 = document.createElement('div');
          let answerChoice3 = document.createElement('div');
          let answerChoice4 = document.createElement('div');
          let isAnswerCorrect = document.createElement('h4');

          if (turn === 0) {
            askedQuestion.style.backgroundColor = 'rgb(255, 174, 0)';
            answerChoice1.style.backgroundColor = 'rgb(192, 140, 26)';
            answerChoice2.style.backgroundColor = 'rgb(192, 140, 26)';
            answerChoice3.style.backgroundColor = 'rgb(192, 140, 26)';
            answerChoice4.style.backgroundColor = 'rgb(192, 140, 26)';
            questionSelectedDiv.style.backgroundColor = 'rgb(192, 140, 26)';
          } else if (turn === 1) {
            askedQuestion.style.backgroundColor = 'rgb(0, 255, 51)';
            answerChoice1.style.backgroundColor = 'rgb(29, 151, 54)';
            answerChoice2.style.backgroundColor = 'rgb(29, 151, 54)';
            answerChoice3.style.backgroundColor = 'rgb(29, 151, 54)';
            answerChoice4.style.backgroundColor = 'rgb(29, 151, 54)';
            questionSelectedDiv.style.backgroundColor = 'rgb(29, 151, 54)';
          } else if (turn === 2) {
            askedQuestion.style.backgroundColor = 'rgb(106, 0, 255)';
            answerChoice1.style.backgroundColor = 'rgb(77, 19, 159)';
            answerChoice2.style.backgroundColor = 'rgb(77, 19, 159)';
            answerChoice3.style.backgroundColor = 'rgb(77, 19, 159)';
            answerChoice4.style.backgroundColor = 'rgb(77, 19, 159)';
            questionSelectedDiv.style.backgroundColor = 'rgb(77, 19, 159)';
          } else if (turn === 3) {
            askedQuestion.style.backgroundColor = 'rgb(0, 255, 255)';
            answerChoice1.style.backgroundColor = 'rgb(59, 167, 167)';
            answerChoice2.style.backgroundColor = 'rgb(59, 167, 167)';
            answerChoice3.style.backgroundColor = 'rgb(59, 167, 167)';
            answerChoice4.style.backgroundColor = 'rgb(59, 167, 167)';
            questionSelectedDiv.style.backgroundColor = 'rgb(59, 167, 167)';
          };

          questionSelectedDiv.classList.add('input-question');
          answerChoice1.classList.add('answer1-area', 'answer-area');
          answerChoice2.classList.add('answer2-area', 'answer-area');
          answerChoice3.classList.add('answer3-area', 'answer-area');
          answerChoice4.classList.add('answer4-area', 'answer-area');
          isAnswerCorrect.classList.add('is-answer-correct');

          questionSelectedDiv.style.gridArea = '1 / 1 / 2 / 5';
          answerChoice1.style.gridArea = '3 / 1 / 4 / 2';
          answerChoice2.style.gridArea = '3 / 2 / 4 / 3';
          answerChoice3.style.gridArea = '3 / 3 / 4 / 4';
          answerChoice4.style.gridArea = '3 / 4 / 4 / 5';
          isAnswerCorrect.style.gridArea = '2 / 1 / 3 / 5';

          let answerChoice1Text = document.createElement('h4');
          answerChoice1Text.classList.add('answer-display-text');
          answerChoice1.appendChild(answerChoice1Text);

          let answerChoice2Text = document.createElement('h4');
          answerChoice2Text.classList.add('answer-display-text');
          answerChoice2.appendChild(answerChoice2Text);

          let answerChoice3Text = document.createElement('h4');
          answerChoice3Text.classList.add('answer-display-text');
          answerChoice3.appendChild(answerChoice3Text);

          let answerChoice4Text = document.createElement('h4');
          answerChoice4Text.classList.add('answer-display-text');
          answerChoice4.appendChild(answerChoice4Text);

          let randomQuestionNum = Math.floor(Math.random() * questionsArray.length);

          let questionSelectedText = document.createElement('h4');
          questionSelectedText.innerText = questionsArray[randomQuestionNum].theQuestion;

          let randomNum = Math.floor(Math.random() * 4)

          function removeQuestion() {
            questionSelectedDiv.style.animationName = 'disappear';
            answerChoice1.style.animationName = 'disappear';
            answerChoice2.style.animationName = 'disappear';
            answerChoice3.style.animationName = 'disappear';
            answerChoice4.style.animationName = 'disappear';
            isAnswerCorrect.style.animationName = 'disappear';

            setTimeout(() => {
              questionSelectedDiv.remove();
              answerChoice1.remove();
              answerChoice2.remove();
              answerChoice3.remove();
              answerChoice4.remove();
              isAnswerCorrect.remove();
              askedQuestion.style.animationName = 'settings-screen-disappear';
              setTimeout(() => {
                askedQuestion.remove();
                isAnswerCorrect.innerText = '';
              }, 750);

            }, 750);
          };

          // function incrementScore() {
          //     if(turn === 0) {
          //         player1ScoreNum++;
          //         player1Score.innerText = player1ScoreNum;
          //         turn = 1;
          //     } else if(turn === 1) {
          //         player2ScoreNum++;
          //         player2Score.innerText = player2ScoreNum;
          //         turn = 2;
          //     } else if(turn === 2) {
          //         player3ScoreNum++;
          //         player3Score.innerText = player3ScoreNum;
          //         turn = 3;
          //     } else if(turn === 3) {
          //         player4ScoreNum++;
          //         player4Score.innerText = player4ScoreNum;
          //         turn = 0;
          //     }
          // }

          function showWrongAnswers(choice1, choice2, choice3) {
            choice1.innerText = questionsArray[randomQuestionNum].wrongAnswer1;
            choice2.innerText = questionsArray[randomQuestionNum].wrongAnswer2;
            choice3.innerText = questionsArray[randomQuestionNum].wrongAnswer3;
          }

          function wrongAnswerPicked() {
            isAnswerCorrect.style.color = 'rgb(255, 91, 91)'
            isAnswerCorrect.innerText = 'اجابة خاطئة!';

            for (let i = 0; i < questionsArray.length; i++) {
              if (questionsArray[i].theQuestion === questionSelectedText.innerText) {
                questionsArray.splice(i, 1);
              }
            }

            setTimeout(() => {
              removeQuestion();
            }, 2000);
          }

          function correctAnswerPicked() {
            isAnswerCorrect.style.color = 'rgb(90, 255, 140)'
            isAnswerCorrect.innerText = 'اجابة صحيحة!';
            // incrementScore();

            for (let i = 0; i < questionsArray.length; i++) {
              if (questionsArray[i].theQuestion === questionSelectedText.innerText) {
                questionsArray.splice(i, 1);
              }
            }

            setTimeout(() => {
              removeQuestion();
            }, 2000);
          };

          function displayAnswers(correctChoiceText, correctChoice, wrongChoice1, wrongChoice2, wrongChoice3, firstAnswer, secondAnswer, thirdAnswer) {
            correctChoiceText.innerText = questionsArray[randomQuestionNum].correct;

            correctChoice.addEventListener('click', function () {
              correctAnswerPicked();
              checkIfGameIsOver();
            });

            wrongChoice1.addEventListener('click', function () {
              wrongAnswerPicked();
              checkIfGameIsOver();
            });

            wrongChoice2.addEventListener('click', function () {
              wrongAnswerPicked();
              checkIfGameIsOver();
            });

            wrongChoice3.addEventListener('click', function () {
              wrongAnswerPicked();
              checkIfGameIsOver();
            });

            let anotherRandomNum = Math.floor(Math.random() * 3)

            if (anotherRandomNum === 0) {
              showWrongAnswers(firstAnswer, secondAnswer, thirdAnswer);
            } else if (anotherRandomNum === 1) {
              showWrongAnswers(secondAnswer, thirdAnswer, firstAnswer);
            } else if (anotherRandomNum === 2) {
              showWrongAnswers(thirdAnswer, firstAnswer, secondAnswer);
            }
          }

          function checkIfGameIsOver() {
            if (questionsArray.length === 0) {
              setTimeout(() => {
                endScreen.style.display = 'flex';
                endScreen.style.animationName = 'settings-screen-showup';
                endScreen.style.height = '85vh';
                endScreen.style.width = '85vh';
                endScreen.style.color = 'white';
                if (randomIntroNum === 0) {
                  endScreen.style.backgroundColor = 'rgb(255, 174, 0)';
                } else if (randomIntroNum === 1) {
                  endScreen.style.backgroundColor = 'rgb(0, 255, 51)';
                } else if (randomIntroNum === 2) {
                  endScreen.style.backgroundColor = 'rgb(106, 0, 255)';
                } else if (randomIntroNum === 3) {
                  endScreen.style.backgroundColor = 'rgb(0, 255, 255)';
                };

                setTimeout(() => {
                  let winnerText = document.createElement('h4');
                  let winnerImg = document.createElement('img');

                  winnerText.classList.add('winner-text');
                  winnerImg.classList.add('winner-image');

                  winnerText.innerText = 'الفريق الفائز هو:';

                  endScreen.appendChild(winnerText);
                  endScreen.appendChild(winnerImg);
                }, 1500);
              }, 3500);
            }
          };

          if (randomNum === 0) {

            displayAnswers(answerChoice1Text, answerChoice1, answerChoice2, answerChoice3, answerChoice4, answerChoice2Text, answerChoice3Text, answerChoice4Text);

          } else if (randomNum === 1) {

            displayAnswers(answerChoice2Text, answerChoice2, answerChoice1, answerChoice3, answerChoice4, answerChoice1Text, answerChoice3Text, answerChoice4Text);

          } else if (randomNum === 2) {

            displayAnswers(answerChoice3Text, answerChoice3, answerChoice2, answerChoice1, answerChoice4, answerChoice2Text, answerChoice1Text, answerChoice4Text);

          } else if (randomNum === 3) {

            displayAnswers(answerChoice4Text, answerChoice4, answerChoice2, answerChoice3, answerChoice1, answerChoice2Text, answerChoice3Text, answerChoice1Text);

          }

          questionSelectedDiv.appendChild(questionSelectedText);

          askedQuestion.appendChild(questionSelectedDiv);
          askedQuestion.appendChild(answerChoice1);
          askedQuestion.appendChild(answerChoice2);
          askedQuestion.appendChild(answerChoice3);
          askedQuestion.appendChild(answerChoice4);
          askedQuestion.appendChild(isAnswerCorrect);
          gameScreen.appendChild(askedQuestion);
        });

      }, 750);
    };

    twoPlayers.addEventListener('click', function () {
      if (questionsArray.length >= 2) {
        startGame(2);
        playersCountScreen.style.pointerEvents = 'none';
      } else {
        playersCountScreenH4.innerText = 'عدد الاسئلة قليل جدا';
      }
    });

    threePlayers.addEventListener('click', function () {
      if (questionsArray.length >= 3) {
        startGame(3);
        playersCountScreen.style.pointerEvents = 'none';
      } else {
        playersCountScreenH4.innerText = 'عدد الاسئلة قليل جدا';
      }
    });

    fourPlayers.addEventListener('click', function () {
      if (questionsArray.length >= 4) {
        startGame(4);
        playersCountScreen.style.pointerEvents = 'none';
      } else {
        playersCountScreenH4.innerText = 'عدد الاسئلة قليل جدا';
      }
    });

    playersCountScreen.appendChild(playersCountScreenUtility);
    playersCountScreen.appendChild(twoPlayers);
    playersCountScreen.appendChild(threePlayers);
    playersCountScreen.appendChild(fourPlayers);

    setTimeout(() => {
      playersCountScreenUtility.style.opacity = '100%';
      twoPlayers.style.opacity = '100%';
      threePlayers.style.opacity = '100%';
      fourPlayers.style.opacity = '100%';
    }, 1500);

    //Player count screen return button code

    playersCountScreenReturnBtn.addEventListener('click', function () {

      playersCountScreenUtility.style.animationName = 'disappear';
      twoPlayers.style.animationName = 'disappear';
      threePlayers.style.animationName = 'disappear';
      fourPlayers.style.animationName = 'disappear';

      setTimeout(() => {
        playersCountScreenUtility.remove();
        twoPlayers.remove();
        threePlayers.remove();
        fourPlayers.remove();
        playersCountScreen.style.animationName = 'settings-screen-disappear';
        setTimeout(() => {
          playersCountScreen.style.display = 'none';
          mainMenuBtns.style.pointerEvents = 'auto';
        }, 750);

      }, 750);
    });

  }, 1500);
});