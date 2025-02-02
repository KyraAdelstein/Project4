let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
   MORE_MOVES_LEFT: 1,
   HUMAN_WINS: 2,
   COMPUTER_WINS: 3,
   DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // Setup the click event for the "New game" button
   const newBtn = document.getElementById("newGameButton");
   newBtn.addEventListener("click", newGame);

   // Create click-event handlers for each game board button
   const buttons = getGameBoardButtons();
   for (let button of buttons) {
      button.addEventListener("click", function () { boardButtonClicked(button); });
   }

   // Clear the board
   newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
   return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
   const buttons = getGameBoardButtons();

   // Ways to win
   const possibilities = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
   ];

   // Check for a winner first
   for (let indices of possibilities) {
      if (buttons[indices[0]].textContent !== "" &&
         buttons[indices[0]].textContent === buttons[indices[1]].textContent &&
         buttons[indices[1]].textContent === buttons[indices[2]].textContent) {

         // Found a winner
         if (buttons[indices[0]].textContent === "X") {
            return gameStatus.HUMAN_WINS;
         }
         else {
            return gameStatus.COMPUTER_WINS;
         }
      }
   }

   // See if any more moves are left
   for (let button of buttons) {
      if (button.textContent !== "X" && button.textContent !== "O") {
         return gameStatus.MORE_MOVES_LEFT;
      }
   }

   // If no winner and no moves left, then it's a draw
   return gameStatus.DRAW_GAME;
}

function newGame() {
   clearTimeout(computerMoveTimeout);
   computerMoveTimeout = 0;

   const buttons = getGameBoardButtons();
   for (let button of buttons) {
      button.textContent = "";
      button.className = "";
      button.disabled = false;
   }

   playerTurn = true;
   document.getElementById("turnInfo").textContent = "Your turn";
}

function boardButtonClicked(button) {
   if (playerTurn) {
      button.textContent = "X";
      button.classList.add("x");
      button.disabled = true;
      switchTurn();
   }
}

function switchTurn() {
   const status = checkForWinner();

   if (status === gameStatus.MORE_MOVES_LEFT) {
      if (playerTurn) {
         playerTurn = false;
         document.getElementById("turnInfo").textContent = "Computer's turn";
         computerMoveTimeout = setTimeout(makeComputerMove, 1000);
      } else {
         playerTurn = true;
         document.getElementById("turnInfo").textContent = "Your turn";
      }
   } else {
      playerTurn = false;
      if (status === gameStatus.HUMAN_WINS) {
         document.getElementById("turnInfo").textContent = "You win!";
      } else if (status === gameStatus.COMPUTER_WINS) {
         document.getElementById("turnInfo").textContent = "Computer wins!";
      } else {
         document.getElementById("turnInfo").textContent = "Draw game";
      }
   }
}

function makeComputerMove() {
   const buttons = getGameBoardButtons();
   let availableButtons = [];

   for (let button of buttons) {
      if (button.textContent === "") {
         availableButtons.push(button);
      }
   }

   if (availableButtons.length > 0) {
      let randomIndex = Math.floor(Math.random() * availableButtons.length);
      let chosenButton = availableButtons[randomIndex];

      chosenButton.textContent = "O";
      chosenButton.classList.add("o");
      chosenButton.disabled = true;

      switchTurn();
   }
}