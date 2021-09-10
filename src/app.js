/* eslint-disable */
import "bootstrap";
import "./style.css";

let card = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let pintas = ["♦", "♥", "♠", "♣"];

const generateRandomCard = () => {
  let cardRandom = Math.floor(Math.random() * (card.length - 1));
  let pintasRandom = Math.floor(Math.random() * (pintas.length - 1));
  let cardNumber = card[cardRandom];
  let nuevaPinta = pintas[pintasRandom];
  let color = "";
  console.log(pintasRandom);
  if (pintasRandom === 0 || pintasRandom === 1) {
    color = "red";
  } else {
    color = "black";
  }
  console.log(color);
  let contenedorNumero = document.getElementById("number-type");
  let contenedorPinta = document.querySelectorAll("#card-type");
  console.log(contenedorPinta);
  for (let i = 0; i < contenedorPinta.length; i++) {
    contenedorPinta[i].innerHTML = nuevaPinta;
    contenedorPinta[i].style.color = color;
    contenedorPinta[i].style.fontSize = "18";
  }

  contenedorNumero.innerHTML = cardNumber;
  contenedorNumero.style.color = color;
};

window.onload = generateRandomCard;
