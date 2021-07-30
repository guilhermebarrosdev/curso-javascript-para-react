import CardGame from '../CardGame';
import './style.css';

function CardFrontBack() {
  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
    const $origin = event.target;
    $origin.closest('.card-front-back').classList.toggle('-active');
  };

  return /*html*/ `
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame('logo-javascript', 'logo do javascript')}
            </div>
        </article>
    `;
}
export default CardFrontBack;
