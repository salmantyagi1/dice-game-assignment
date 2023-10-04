const diceImage = document.querySelector('.img-dice');
const rollDice = document.querySelector('.roll-dice');
const player1CurrentScore = document.getElementById('player-1-score'); // selected by id
const player2CurrentScore = document.getElementById('player-2-score'); // selected by id
const hold = document.querySelector('.hold');
const player1TotalScore = document.querySelector('.player-1-score'); // selected by class
const player2TotalScore = document.querySelector('.player-2-score'); // selected by class
const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const newGame = document.querySelector('.new-game');

let score = 0;
rollDice.addEventListener('click', () => {
  const randomDice = Math.floor(Math.random() * 6 + 1);
  diceImage.src = `/dice-${randomDice}.png`;
  diceImage.style.display = 'block';

  if (randomDice === 1) {
    player1.classList.toggle('active');
    player2.classList.toggle('active');
    player1CurrentScore.textContent = 0;
    player2CurrentScore.textContent = 0;
    score = 0;
  } else {
    if (player1.classList.contains('active')) {
      score += randomDice;
      player1CurrentScore.textContent = score;
    }

    if (player2.classList.contains('active')) {
      score += randomDice;
      player2CurrentScore.textContent = score;
    }
  }
});

hold.addEventListener('click', () => {
  if (player1.classList.contains('active')) {
    player1TotalScore.textContent =
      Number(player1TotalScore.textContent) + score;

    score = 0;
    player1CurrentScore.textContent = 0;

    player1.classList.toggle('active');
    player2.classList.toggle('active');
  } else {
    player2TotalScore.textContent =
      Number(player2TotalScore.textContent) + score;

    score = 0;
    player2CurrentScore.textContent = 0;

    player1.classList.toggle('active');
    player2.classList.toggle('active');
  }
});

newGame.addEventListener('click', () => {
  diceImage.style.display = 'none';
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player1TotalScore.textContent = 0;
  player2TotalScore.textContent = 0;
  score = 0;
  player1.classList.add('active');
  player2.classList.remove('active');
});
