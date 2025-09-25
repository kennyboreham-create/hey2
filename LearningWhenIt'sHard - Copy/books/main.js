let current = 0;
let bookSize = { width: 600, height: 400 };

// Dynamically select the correct array
let pages = allBooks[bookArrayName];



    const book = document.getElementById('book');
    const leftPage = document.getElementById('leftPage');
    const rightPage = document.getElementById('rightPage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const zoomIn = document.getElementById('zoomIn');
    const zoomOut = document.getElementById('zoomOut');

  function readPage(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();

  // Find Zira by name
  const ziraVoice = voices.find(v => v.name.includes("Linda"));
  if (ziraVoice) {
    utterance.voice = ziraVoice;
  }

  utterance.rate = 1;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

speechSynthesis.onvoiceschanged = () => {
  const voices = speechSynthesis.getVoices();
 
};

document.getElementById('readBtn').addEventListener('click', () => {
  const leftText = leftPage.innerText || '';
  const rightText = rightPage.innerText || '';
  readPage(leftText + ' ' + rightText);
});

   function updatePages() {
  leftPage.classList.add('turning');
  rightPage.classList.add('turning');

  setTimeout(() => {
    if (current === 0) {
      book.classList.add('cover');
      leftPage.innerHTML = pages[0][0];
      rightPage.style.display = 'none';
      leftPage.style.width = '100%';
      leftPage.style.textAlign = 'center';
      book.style.width = bookSize.width / 2 + 'px'; // half width for single page
    } else {
      book.classList.remove('cover');
      leftPage.innerHTML = pages[current][0];
      rightPage.innerHTML = pages[current][1];
      rightPage.style.display = 'block';
      leftPage.style.width = '50%';
      leftPage.style.textAlign = 'left';
      book.style.width = bookSize.width + 'px'; // full width for two pages
    }

    leftPage.classList.remove('turning');
    rightPage.classList.remove('turning');
  }, 300);
}




    function goNext() {
      if (current < pages.length - 1) {
        current++;
        updatePages();
      }
    }

    function goPrev() {
      if (current > 0) {
        current--;
        updatePages();
      }
    }

    function resizeBook(delta) {
  bookSize.width += delta;
  bookSize.height += delta * 0.66; // maintain aspect ratio
  book.style.width = bookSize.width + 'px';
  book.style.height = bookSize.height + 'px';

  // Scale font size based on width
  const scaleFactor = bookSize.width / 600; // 600 is the original width
  book.style.fontSize = (16 * scaleFactor) + 'px'; // base size is 16px
}


    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
    });

    nextBtn.addEventListener('click', goNext);
    prevBtn.addEventListener('click', goPrev);
    zoomIn.addEventListener('click', () => resizeBook(100));
    zoomOut.addEventListener('click', () => resizeBook(-100));

const toggleBtn = document.getElementById('toggleControls');
const controlsContainer = document.getElementById('controlsContainer');

let controlsVisible = true;

toggleBtn.addEventListener('click', () => {


  controlsVisible = !controlsVisible;
  controlsContainer.style.display = controlsVisible ? 'flex' : 'none';
  toggleBtn.textContent = controlsVisible ? '🙈 Hide Controls' : '^';

if (!controlsVisible) {	
showHello();
}
console.log(controlsVisible);
});



function showHello() {
      const hello = document.createElement('div');
      hello.id = 'hello';
      hello.textContent = 'USE ARROW KEYS TO TURN THE PAGE';
      document.body.appendChild(hello);

      // Remove after animation completes
      setTimeout(() => {
        hello.remove();
      }, 6000);
    }


    updatePages();