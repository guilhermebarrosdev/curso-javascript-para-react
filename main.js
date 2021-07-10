import './src/styles/settings/colors.css';
import './src/styles/generics/reset.css';
import '/src/styles/elements/base.css';

import CardGame from "./src/components/CardGame";
import BoardGame from './src/objects/BoardGame';
import PlayerName from './src/components/PlayerName';

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", 
    `
        ${PlayerName("Player1")}
        ${PlayerName("Player2")}
        ${BoardGame(6)}
`);