const words = ["tree", "park", "play", "line", "wash"];
const gridSize = 8;
const grid = document.getElementById("wordGrid");
const wordDisplay = document.getElementById("wordDisplay");
let foundWords = [];

function getRandomLetter() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[Math.floor(Math.random() * letters.length)];
}

// Display target words
words.forEach(word => {
  const li = document.createElement("li");
  li.textContent = word.toUpperCase();
  li.id = `word-${word}`;
  wordDisplay.appendChild(li);
});

// Create grid
let gridLetters = Array(gridSize * gridSize).fill(null).map(() => getRandomLetter());

// Place words in grid
words.forEach(word => {
  let placed = false;
  while (!placed) {
    const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
    const start = Math.floor(Math.random() * gridLetters.length);
    const row = Math.floor(start / gridSize);
    const col = start % gridSize;

    if (direction === "horizontal" && col + word.length <= gridSize) {
      for (let i = 0; i < word.length; i++) {
        gridLetters[row * gridSize + col + i] = word[i].toUpperCase();
      }
      placed = true;
    } else if (direction === "vertical" && row + word.length <= gridSize) {
      for (let i = 0; i < word.length; i++) {
        gridLetters[(row + i) * gridSize + col] = word[i].toUpperCase();
      }
      placed = true;
    }
  }
}

// Render grid
gridLetters.forEach((letter, i) => {
  const cell = document.createElement("div");
  cell.textContent = letter;
  cell.dataset.index = i;
  cell.addEventListener("click", () => handleClick(cell));
  grid.appendChild(cell);
});

let currentWord = "";

function handleClick(cell) {
  currentWord += cell.textContent;
  cell.style.backgroundColor = "#4caf50";

  if (words.includes(currentWord.toLowerCase()) && !foundWords.includes(currentWord)) {
    foundWords.push(currentWord.toLowerCase());
    document.getElementById(`word-${currentWord.toLowerCase()}`).classList.add("found");
    currentWord = "";

    if (foundWords.length === words.length) {
      setTimeout(() => alert("🎉 Congrats! You found all the words!"), 100);
    }
  }

  if (currentWord.length > 4) {
    currentWord = "";
    document.querySelectorAll(".grid div").forEach(cell => {
      cell.style.backgroundColor = "#1c2f5a";
    });
  }
}