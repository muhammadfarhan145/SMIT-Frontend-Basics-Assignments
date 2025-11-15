const board = Array(9).fill(null);
let currentPlayer = "X";

const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");

cells.forEach((cell) => cell.addEventListener("click", handleClick));

function handleClick(e) {
  const index = e.target.dataset.index;
  if (board[index] || checkWinner()) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner()) {
    status.textContent = `${currentPlayer} Wins!`;
    return;
  }
  if (board.every((cell) => cell)) {
    status.textContent = "It's a Tie!";
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  status.textContent = `Player ${currentPlayer}'s Turn`;

  if (currentPlayer === "O") {
    setTimeout(cpuMove, 500);
  }
}

function cpuMove() {
  const emptyCells = board
    .map((val, idx) => (val === null ? idx : null))
    .filter((val) => val !== null);
  if (emptyCells.length === 0) return;

  const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  board[randomIndex] = "O";
  document.querySelector(`.cell[data-index="${randomIndex}"]`).textContent =
    "O";

  if (checkWinner()) {
    status.textContent = `O Wins!`;
    return;
  }
  if (board.every((cell) => cell)) {
    status.textContent = "It's a Tie!";
    return;
  }

  currentPlayer = "X";
  status.textContent = `Player X's Turn`;
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winPatterns.some((pattern) =>
    pattern.every((index) => board[index] === currentPlayer)
  );
}
