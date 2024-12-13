"use strict"
import colors from './data.json';
import './style.css';

const palleteContainer = document.querySelector('.js-palette');
function createCards(colors){
return colors
.map((color) => ` <div class="card">
        <div class="swatch"
        data-hex="${color.hex}";
        data-rgb="${color.rgb}";
        style="background-color: ${color.hex}">
           
        </div>
        <div class="meta">
    <p>HEX: ${color.hex}</p>
    <p>RGB: ${color.rgb}</p>
   </div>
    </div>
    `
)
.join('');
}

palleteContainer.innerHTML = createCards(colors);
palleteContainer.addEventListener('click', (e) => {
    const swatch = e.target.closest('.swatch');
    if (!swatch) return;
    const selectedHex = swatch.dataset.hex;
    document.body.style.backgroundColor = selectedHex;
    document.querySelectorAll('.card').forEach((card) => {
        card.classList.remove('is-active');
    });
    swatch.parentElement.classList.add('is-active');
})