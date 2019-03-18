const Playground = document.getElementById('Playground');
const RockEl = document.getElementById('Rock');
const PaperEl = document.getElementById('Paper');
const ScissorEl = document.getElementById('Scissor');

const Selections = ['Rock', 'Paper', 'Scissor'];
let playerSelection;
let computerSelection;

function getRandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay() {
  return Selections[getRandomNum(Selections.length)];
}

function playRound(playerSelection, computerSelection) {
  const Results = document.getElementById('Results');
  Results.innerText = `${playerSelection} vs ${computerSelection}`
  console.log(playerSelection, ' + ', computerSelection);
}

function handleClick(el) {
  playerSelection = el.dataset.selection;
  computerSelection = computerPlay()

  const unselected = [RockEl, PaperEl, ScissorEl].filter(el => el.dataset.selection !== playerSelection);
  unselected.forEach( el => el.style.display = 'none')

  setTimeout(() => {
    playRound(playerSelection,computerSelection);
  }, 1000)
}

[RockEl, PaperEl, ScissorEl].forEach(selection => {
  selection.addEventListener('click', (e) => {
    handleClick(selection)
  })
})
