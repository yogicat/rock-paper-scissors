const Playground = document.getElementById('Playground');
const RockEl = document.getElementById('Rock');
const PaperEl = document.getElementById('Paper');
const ScissorEl = document.getElementById('Scissor');
const Reset = document.getElementById('Reset');
const Results = document.getElementById('Results');
const Selections = ['Rock', 'Paper', 'Scissor'];
const Emoji = ['✊', '🖐', '✌️']
let playerSelection;
let computerSelection;

function getRandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay() {
  const num = getRandomNum(Selections.length);
  const comSelect = Selections[num];

  document.getElementById('Computer').innerText = Emoji[num];
  return comSelect;
}

function playRound(playerSelection, computerSelection) {
  Results.innerText = `${playerSelection} vs ${computerSelection}`
  let resultText = ';'
  // (rock - rock, paper, scissor)
  if (playerSelection === 'Rock') {
    if (computerSelection === 'Scissor') {
      return Results.innerText = 'You Win';
    } else if (computerSelection === 'Paper') {
      return Results.innerText = 'You Lose';
    } else {
      return Results.innerText = 'You Even';
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      return Results.innerText = 'You Win';
    } else if (computerSelection === 'Scissor') {
      return Results.innerText = 'You Lose';
    } else {
      return Results.innerText = 'You Even';
    }
  } else {
    if (computerSelection === 'Paper') {
      return Results.innerText = 'You Win';
    } else if (computerSelection === 'Rock') {
      return Results.innerText = 'You Lose';
    } else {
      return Results.innerText = 'You Even';
    }
  }
}

function handleClick(el) {
  playerSelection = el.dataset.selection;
  computerSelection = computerPlay()

  const unselected = [RockEl, PaperEl, ScissorEl].filter(el => el.dataset.selection !== playerSelection);
  unselected.forEach( el => el.style.display = 'none')
  playRound(playerSelection,computerSelection);
}

[RockEl, PaperEl, ScissorEl].forEach(selection => {
  selection.addEventListener('click', () => {
    handleClick(selection)
  })
})

Reset.addEventListener('click', () => {
  [RockEl, PaperEl, ScissorEl].forEach( el => el.style.display = 'initial')
  computerSelection = undefined;
  document.getElementById('Computer').innerText = '❓';
  Results.innerText = 'Click to choose your weapon';
})
