const flipButton = document.querySelector('.flip-button');
const card = document.querySelector('.inner');

const cardFrontText = document.querySelector('.front input[type="text"]');
const cardBackText = document.querySelector('.back input[type="text"]');

let lastElementWithFocus;

function randomBetween(lower, upper) {
  return Math.random() * (upper - lower) + lower;
}

function flipCard() {
  card.classList.toggle('flipped');
  card.setAttribute('style', `--rotationDeg: ${randomBetween(-1, 1)}deg`);
}

flipButton.addEventListener('click', flipCard);

function cardFocusing(e) {
  if (!e.key.includes('Tab')) {
    return;
  }

  lastElementWithFocus = document.querySelector(':focus');
}

document.addEventListener('keydown', cardFocusing);

cardBackText.addEventListener('focus', () => {
  if (
    (lastElementWithFocus === flipButton ||
      lastElementWithFocus === cardFrontText) &&
    !card.classList.contains('flipped')
  ) {
    flipCard();
  }
});

cardFrontText.addEventListener('focus', () => {
  if (
    (lastElementWithFocus === cardBackText || !lastElementWithFocus) &&
    card.classList.contains('flipped')
  ) {
    flipCard();
  }
});
