<!DOCTYPE html>
<html>
<head>
  <title>Number Detective Game</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
      margin-top: 50px;
    }
    .clue {
      margin: 10px 0;
      font-weight: bold;
    }
    .guess-btn {
      margin: 5px;
      padding: 10px 20px;
      font-size: 18px;
    }
    #result {
      margin-top: 20px;
      font-size: 20px;
      color: darkgreen;
    }
    #points {
      font-size: 18px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>

  <h1>🔍 Number Detective Game</h1>
  <div id="points">Points: 3</div>
  <div id="level">Level 1</div>
  <div id="clues"></div>
  <div id="choices"></div>
  <div id="result"></div>

  <script>
    const levels = [
      {
        answer: 7,
        options: [3, 7, 9],
        clues: [
          "It's an odd number.",
          "It's greater than 5.",
          "It's a single-digit prime."
        ]
      },
      {
        answer: 24,
        options: [18, 24, 30],
        clues: [
          "It's an even number.",
          "It's divisible by 6.",
          "It's less than 25."
        ]
      }
    ];

    let currentLevel = 0;
    let points = 3;

    function loadLevel() {
      document.getElementById("level").textContent = `Level ${currentLevel + 1}`;
      document.getElementById("points").textContent = `Points: ${points}`;
      document.getElementById("result").textContent = "";

      const cluesDiv = document.getElementById("clues");
      cluesDiv.innerHTML = "";
      levels[currentLevel].clues.forEach(clue => {
        const clueEl = document.createElement("div");
        clueEl.className = "clue";
        clueEl.textContent = `🕵️ Clue: ${clue}`;
        cluesDiv.appendChild(clueEl);
      });

      const choicesDiv = document.getElementById("choices");
      choicesDiv.innerHTML = "";
      levels[currentLevel].options.forEach(num => {
        const btn = document.createElement("button");
        btn.className = "guess-btn";
        btn.textContent = num;
        btn.onclick = () => checkAnswer(num);
        choicesDiv.appendChild(btn);
      });
    }

    function checkAnswer(guess) {
      const correct = levels[currentLevel].answer;
      if (guess === correct) {
        document.getElementById("result").textContent = "✅ Correct! Moving to next level...";
        currentLevel++;
        if (currentLevel < levels.length) {
          setTimeout(loadLevel, 1500);
        } else {
          document.getElementById("choices").innerHTML = "";
          document.getElementById("clues").innerHTML = "";
          document.getElementById("result").textContent = `🎉 You solved all levels with ${points} point(s) left!`;
        }
      } else {
        points--;
        document.getElementById("points").textContent = `Points: ${points}`;
        if (points <= 0) {
          document.getElementById("result").textContent = "❌ Game Over! You've run out of points.";
          document.getElementById("choices").innerHTML = "";
          document.getElementById("clues").innerHTML = "";
        } else {
          document.getElementById("result").textContent = "❌ Wrong guess! Try again.";
        }
      }
    }

    loadLevel();
  </script>

</body>
</html>