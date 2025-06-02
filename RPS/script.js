// Paso 1: Verificamos si JS está conectado
console.log("Hello World");

// Paso 2: Función para elección aleatoria de la computadora
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Paso 3: Función para obtener elección del jugador humano
function getHumanChoice() {
  const choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
  return choice;
}

// Paso 6 (incluye paso 4 y 5): Jugar el juego completo
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice;

    if (human === computer) {
      console.log("It's a tie!");
    } else if (
      (human === "rock" && computer === "scissors") ||
      (human === "paper" && computer === "rock") ||
      (human === "scissors" && computer === "paper")
    ) {
      console.log(`You win! ${human} beats ${computer}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computer} beats ${human}`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score after round ${i + 1}: Human ${humanScore} - Computer ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("😢 You lost the game!");
  } else {
    console.log("😐 The game is a tie!");
  }
}

// Iniciar el juego
playGame();
