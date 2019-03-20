const Playground = document.getElementById('Playground');
const RockPaperScissors = document.querySelectorAll('.RockPaperScissor')
const Reset = document.getElementById('Reset');
const Results = document.getElementById('Results');
const yourScore = document.getElementById('Your-score');
const computerScore = document.getElementById('Computer-score');

var y = 0;
var c = 0;

var playerSelection;
var computerSelection;


function getRandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay() {
  const Selections = ['Rock', 'Paper', 'Scissor'];
  const Emoji = ['✊', '🖐', '✌️']
  const num = getRandomNum(Selections.length);

  document.getElementById('Computer').innerText = Emoji[num];
  return  Selections[num];
}


function setScore(resultText) {
  switch (resultText) {
    case 'Tied!':
      break;
    case 'You Win!':
      y += 1;
      yourScore.innerText = y;
      break;
    case 'You Lose!':
      c += 1;
      computerScore.innerText = c;
    default:
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  let resultText;
  if (playerSelection === computerSelection ) {
    resultText = 'Tied!';
  }
  if (playerSelection === 'Rock') {
    resultText =  (computerSelection === 'Scissor') ? 'You Win!' : 'You Lose!';
  }
  if (playerSelection === 'Paper') {
    resultText =  (computerSelection === 'Rock') ? 'You Win!' : 'You Lose!';
  }
  if (playerSelection === 'Scissor') {
    resultText =  (computerSelection === 'Rock') ? 'You Lose!' : 'You Win!';
  }

  setScore(resultText);
  return resultText;
}

function hideUnselected(playerSelection) {
  const unselected = [...RockPaperScissors].filter(el => el.dataset.selection !== playerSelection);
  unselected.forEach( el => el.style.display = 'none')
}

function handleClick(el) {
  playerSelection = el.dataset.selection;
  computerSelection = computerPlay()

  hideUnselected(playerSelection)
  Results.innerText = playRound(playerSelection,computerSelection);

  setTimeout(resetElements, 1000);
}

function resetElements() {
  RockPaperScissors.forEach( el => el.style.display = 'initial')
  computerSelection = undefined;
  document.getElementById('Computer').innerText = '❓';
  Results.innerText = 'Click to choose your weapon';
}

function resetScore() {
  y = 0;
  c = 0;
  yourScore.innerText = y;
  computerScore.innerText = c;
}

RockPaperScissors.forEach(selection => {
  selection.addEventListener('click', () => {
    handleClick(selection)
  })
})

Reset.addEventListener('click', () => {
  resetElements()
  resetScore()
})
