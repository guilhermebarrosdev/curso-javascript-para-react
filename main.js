import './src/styles/settings/colors.css';
import './src/styles/generics/reset.css';
import '/src/styles/elements/base.css';

import CardGame from "./src/components/CardGame";

const $root = document.querySelector("#root");

const $htmlCardGame = CardGame();

console.log($htmlCardGame);

$root.insertAdjacentHTML("beforeend", $htmlCardGame);