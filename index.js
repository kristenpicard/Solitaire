var clubs = document.getElementById("clubs");
var diamonds = document.getElementById("diamonds");
var hearts = document.getElementById("hearts");
var spades = document.getElementById("spades");
var stock = document.getElementById("stock");
var pile1 = document.getElementById("pile1");
var pile2 = document.getElementById("pile2");
var pile3 = document.getElementById("pile3");
var pile4 = document.getElementById("pile4");
var pile5 = document.getElementById("pile5");
var pile6 = document.getElementById("pile6");
var pile7 = document.getElementById("pile7");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");

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
  return deck;
}
shuffleDeck(deck);

let pile1Array = [];
let pile2Array = [];
let pile3Array = [];
let pile4Array = [];
let pile5Array = [];
let pile6Array = [];
let pile7Array = [];
let stockpileArray = [];

function setPiles(deck) {
  pile1Array = deck.pop();
  pile2Array = deck.splice(0, 2);
  pile3Array = deck.splice(0, 3);
  pile4Array = deck.splice(0, 4);
  pile5Array = deck.splice(0, 5);
  pile6Array = deck.splice(0, 6);
  pile7Array = deck.splice(0, 7);
}
setPiles(deck);

stockpileArray = deck;

let alreadyShown = [];

function showThreeFromStock(stockArray) {
  for (let i = 0; i < 3; i++) {
    var button = document.createElement("button");
    button.id = "card" + i;
    button.innerHTML = stockArray[i].Value + " of " + stockArray[i].Suit;
    document.getElementById("pulledCards").appendChild(button);
  }
  // addShowntoNewArray(stockpileArray);
}
showThreeFromStock(stockpileArray);

function addShowntoNewArray(stockArray) {
  alreadyShown += stockArray.splice(0, 3);
}

function onClick(stockpileArray) {
  showThreeFromStock(stockpileArray);
}

stock.addEventListener("click", onClick);
