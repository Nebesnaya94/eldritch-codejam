// code should be here
import '../css/main.css';
import ancientsData from '../data/ancients';
import backgroundArr from '../assets/index';
import { brownCards, blueCards, greenCards } from '../data/mythicCards/index';
import difficulties from '../data/difficulties';

document.body.style.backgroundImage = `url('${backgroundArr.backgroundPage}')`;

const deckBlock = document.querySelector('.deck');
deckBlock.style.backgroundImage = `url('${backgroundArr.backgroungDeck}')`;

let greenSum;
let browmSum;
let blueSum;

const greenCount = document.querySelector('.green');
const brownCount = document.querySelector('.brown');
const blueCount = document.querySelector('.blue');

const difficultyContainer = document.querySelector('.difficulty-container');
const stageContainer = document.querySelector('.stage-container');

const ancientCard = document.querySelectorAll('.ancient-card');
for (let i = 0; i < ancientCard.length; i++) {
  ancientCard[i].style.backgroundImage = `url('${ancientsData[i].cardFace}')`;

  ancientCard[i].addEventListener('click', () => {
    for (let thisCard of ancientCard) {
      thisCard.classList.remove('active');
    }
    for (let diff of difficultyButton) {
      diff.classList.remove('active');
    }
    difficultyContainer.classList.add('active');
    ancientCard[i].classList.add('active');
    shuffleButton.classList.remove('active');
    deckBlock.classList.remove('active');
    lastCard.classList.remove('active');
    stageContainer.classList.remove('active');
    stageText.classList.remove('done');
    greenSum = ancientsData[i].green;
    browmSum = ancientsData[i].brown;
    blueSum = ancientsData[i].blue;
  });
}

function filterCard(arr, compl) {
  return arr.filter((item) => item.difficulty == compl);
}

const blueCardsHard = filterCard(blueCards, difficulties[2].id);
const brownCardsHard = filterCard(brownCards, difficulties[2].id);
const greenCardsHard = filterCard(greenCards, difficulties[2].id);

const blueCardsNormal = filterCard(blueCards, difficulties[1].id);
const brownCardsNormal = filterCard(brownCards, difficulties[1].id);
const greenCardsNormal = filterCard(greenCards, difficulties[1].id);

const blueCardsEasy = filterCard(blueCards, difficulties[0].id);
const brownCardsEasy = filterCard(brownCards, difficulties[0].id);
const greenCardsEasy = filterCard(greenCards, difficulties[0].id);

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getCards(required, arr1, arr2) {
  let cardsArr = [];
  let tempArr1 = JSON.parse(JSON.stringify(arr1));
  let tempArr2;
  if (arr2) {
    tempArr2 = JSON.parse(JSON.stringify(arr2));
  }

  while (cardsArr.length < required) {
    if (arr2) {
      tempArr1.length
        ? (cardsArr = cardsArr.concat(
            tempArr1.splice(randomIndex(tempArr1), 1)
          ))
        : (cardsArr = cardsArr.concat(
            tempArr2.splice(randomIndex(tempArr2), 1)
          ));
    } else {
      cardsArr = cardsArr.concat(tempArr1.splice(randomIndex(tempArr1), 1));
    }
  }
  return cardsArr;
}

let deck = [];

function deckVeryLow() {
  let deckGreen = getCards(greenSum, greenCardsEasy, greenCardsNormal);
  let deckBrown = getCards(browmSum, brownCardsEasy, brownCardsNormal);
  let deckBlue = getCards(blueSum, blueCardsEasy, blueCardsNormal);
  return deck.concat(deckGreen, deckBrown, deckBlue);
}

function deckLow() {
  let deckGreen = getCards(greenSum, greenCardsEasy.concat(greenCardsNormal));
  let deckBrown = getCards(browmSum, brownCardsEasy.concat(brownCardsNormal));
  let deckBlue = getCards(blueSum, blueCardsEasy.concat(blueCardsNormal));
  return deck.concat(deckGreen, deckBrown, deckBlue);
}

function deckMedium() {
  let deckGreen = getCards(greenSum, greenCards);
  let deckBrown = getCards(browmSum, brownCards);
  let deckBlue = getCards(blueSum, blueCards);
  return deck.concat(deckGreen, deckBrown, deckBlue);
}

function deckHard() {
  let deckGreen = getCards(greenSum, greenCardsHard.concat(greenCardsNormal));
  let deckBrown = getCards(browmSum, brownCardsHard.concat(brownCardsNormal));
  let deckBlue = getCards(blueSum, blueCardsHard.concat(blueCardsNormal));
  return deck.concat(deckGreen, deckBrown, deckBlue);
}

function deckVeryHard() {
  let deckGreen = getCards(greenSum, greenCardsHard, greenCardsNormal);
  let deckBrown = getCards(browmSum, brownCardsHard, brownCardsNormal);
  let deckBlue = getCards(blueSum, blueCardsHard, blueCardsNormal);
  return deck.concat(deckGreen, deckBrown, deckBlue);
}

const difficultyButton = document.querySelectorAll('.difficulty');
const shuffleButton = document.querySelector('.shuffle-button');

const deckDifficulty = [
  deckVeryLow,
  deckLow,
  deckMedium,
  deckHard,
  deckVeryHard,
];

let currentDeck;
let currentCard;

for (let n = 0; n < difficultyButton.length; n++) {
  difficultyButton[n].addEventListener('click', () => {
    for (let diff of difficultyButton) {
      diff.classList.remove('active');
    }
    difficultyButton[n].classList.add('active');
    currentDeck = deckDifficulty[n]();
    shuffleButton.classList.add('active');
    deckBlock.classList.remove('active');
    lastCard.classList.remove('active');
    stageContainer.classList.remove('active');
    stageText.classList.remove('done');
    greenCount.textContent = greenSum;
    brownCount.textContent = browmSum;
    blueCount.textContent = blueSum;
  });
}

shuffleButton.addEventListener('click', () => {
  shuffleButton.classList.remove('active');
  stageContainer.classList.add('active');
  deckBlock.classList.add('active');
  lastCard.classList.add('active');
  stageText.classList.remove('done');
  lastCard.style.backgroundImage = 'none';
});

const lastCard = document.querySelector('.last-card');
const stageText = document.querySelector('.stage-text');

deckBlock.addEventListener('click', () => {
  if (currentDeck.length) {
    currentCard = currentDeck.splice(randomIndex(currentDeck), 1);
    lastCard.style.backgroundImage = `url('${currentCard[0].cardFace}')`;
    if (currentCard[0].color == 'green') {
      greenCount.textContent--;
    } else if (currentCard[0].color == 'brown') {
      brownCount.textContent--;
    } else if (currentCard[0].color == 'blue') {
      blueCount.textContent--;
    }
  } else {
    lastCard.style.backgroundImage = 'none';
    stageText.classList.add('done');
  }
});
