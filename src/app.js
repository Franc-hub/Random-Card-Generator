let cards = [];
let colors = ["red", "black"];
let suits = ["♣", "♦", "♥", "♠"];
let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = () => {
  let randomColor = generateRandom(colors);
  let randomSuit = generateRandom(suits);
  let randomNumber = generateRandom(numbers);

  let card = document.querySelector("#card");
  card.style.height = "550px";
  card.style.width = "350px";
  card.style.borderRadius = "10%";
  card.style.backgroundColor = "white";
  card.style.border = "2px solid black";

  let suit = document.querySelector("#suit");
  suit.style.fontSize = "200px";
  let color = document.createTextNode(randomSuit);
  suit.appendChild(color);
  suit.style.color = randomColor;

  let number = document.querySelector("#number");
  number.style.fontSize = "200px";
  number.style.textalign = "center";
  let colorNumber = document.createTextNode(randomNumber);
  number.appendChild(colorNumber);
  number.style.color = randomColor;
};
const generateRandom = item => {
  return item[Math.floor(Math.random() * item.length)];
};

// function deckBuilder() {
//   const values = [
//     "A",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K"
//   ];
//   const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
//   const cards = [];
//   for (let s = 0; s < suits.length; s++) {
//     for (let v = 0; v < values.length; v++) {
//       const value = values[v];
//       const suit = suits[s];
//       cards.push({ value, suit });
//     }
//   }
//   return cards;
// }

// const randomCard = cards => {
//   const random = Math.floor(Math.random() * 51);
//   const cardValue = cards[random].value;
//   const cardSuit = cards[random].suit;
//   let entity;
//   cardSuit === "Diamonds"
//     ? (entity = "&diams;")
//     : (entity = "&" + cardSuit.toLowerCase() + ";");
//   const card = document.createElement("DIV");
//   card.classList.add("card", cardSuit.toLowerCase());
//   card.innerHTML =
//     '<span class="card-value-suit top">' +
//     cardValue +
//     entity +
//     "</span>" +
//     '<span class="card-suit">' +
//     entity +
//     "</span>" +
//     '<span class="card-value-suit bot">' +
//     cardValue +
//     entity +
//     "</span>";
//   document.body.appendChild(card);
// };
// const cards = deckBuilder();
// randomCard(cards);
