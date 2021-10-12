var clubs = document.getElementById("clubs");
var diamonds = document.getElementById("diamonds");
var hearts = document.getElementById("hearts");
var spades = document.getElementById("spades");

clubs.innerHTML = "♣";
diamonds.innerHTML = "♦";
hearts.innerHTML = "♥";
spades.innerHTML = "♠";

var deck = [];
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

function buildDeck(deck, suits, values) {
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i] };
      deck.push(card);
    }
  }
}
buildDeck(deck, suits, values);

function shuffleDeck(deck) {
  // Start at last card and loop through all descending
  for (let i = deck.length - 1; i > 0; i--) {
    // At a random point swap deck[i] with another card
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}
shuffleDeck(deck);

// clubs.addEventListener("click", onClick);
// diamonds.addEventListener("click", onClick);
// hearts.addEventListener("click", onClick);
// spades.addEventListener("click", onClick);
