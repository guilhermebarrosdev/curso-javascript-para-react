import './src/styles/settings/colors.css';
import './src/styles/generics/reset.css';
import '/src/styles/elements/base.css';

import CardGame from "./src/components/CardGame";
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);