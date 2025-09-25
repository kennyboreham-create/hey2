

const bannedWords = ['fuck', 'shit', 'dick','bitch','horny','sex','ass',]; // Replace with actual words
    function allowDrop(ev) {
      ev.preventDefault();
    }

    document.querySelectorAll('.shape').forEach(shape => {
      shape.addEventListener('dragstart', function(ev) {
        ev.dataTransfer.setData("shape", ev.target.getAttribute("data-shape"));
      });
    });

    function dropShape(ev) {
      ev.preventDefault();
      const shapeType = ev.dataTransfer.getData("shape");
      const newShape = document.createElement("div");
      newShape.className = `shape ${shapeType} dropped`;
      newShape.style.left = ev.offsetX + 'px';
      newShape.style.top = ev.offsetY + 'px';
      newShape.setAttribute("data-shape", shapeType);
      document.getElementById("canvas").appendChild(newShape);
    }

function containsProfanity(text) {
  const lowerText = text.toLowerCase();
  return bannedWords.some(word => lowerText.includes(word));
}

function containsProfanity(text) {
  const lowerText = text.toLowerCase();
  return bannedWords.some(word => lowerText.includes(word));
}
document.getElementById('creatureName').addEventListener('input', function () {
  if (containsProfanity(this.value)) {
    this.value = '';
    alert("That word isn't allowed.");
  }
});


function describeCreature() {
  const shapes = document.querySelectorAll('#canvas .dropped');
  const shapeCounts = { circle: 0, square: 0, triangle: 0, rectangle: 0 };

  shapes.forEach(shape => {
    const type = shape.getAttribute("data-shape");
    shapeCounts[type]++;
  });

  const pluralize = (word, count) => `${count} ${word}${count !== 1 ? 's' : ''}`;

  let parts = [];
  for (const [shape, count] of Object.entries(shapeCounts)) {
    if (count > 0) {
      parts.push(pluralize(shape, count));
    }
  }

  const name = document.getElementById('creatureName').value.trim();
  const creatureLabel = name ? name : "your creature";

  const description = parts.length > 0
    ? `${creatureLabel} has ${parts.join(', ')}.`
    : `${creatureLabel} doesn't have any shapes yet.`;

  const utterance = new SpeechSynthesisUtterance(description);
  speechSynthesis.speak(utterance);
}


function clearCanvas() {
  const canvas = document.getElementById("canvas");
  canvas.innerHTML = '';
  speechSynthesis.speak(new SpeechSynthesisUtterance("Your creature has been cleared. Start building again!"));

}
