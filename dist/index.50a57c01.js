var e,r={};r=JSON.parse('[{"hex":"#f44336","rgb":"244,67,54"},{"hex":"#e91e63","rgb":"233,30,99"},{"hex":"#9c27b0","rgb":"156,39,176"},{"hex":"#673ab7","rgb":"103,58,183"},{"hex":"#3f51b5","rgb":"63,81,181"},{"hex":"#2196f3","rgb":"33,150,243"},{"hex":"#00bcd4","rgb":"0,188,212"},{"hex":"#009688","rgb":"0,150,136"},{"hex":"#4caf50","rgb":"76,175,80"},{"hex":"#ffeb3b","rgb":"255,235,59"},{"hex":"#ff9800","rgb":"255,152,0"},{"hex":"#795548","rgb":"121,85,72"},{"hex":"#607d8b","rgb":"96,125,139"}]');const a=document.querySelector(".js-pallete");a.innerHTML=((e=r)&&e.__esModule?e.default:e).map(e=>` <div class="card">
        <div class="swatch"
        data-hex="${e-hex}";
        data-rgb="${e-rgb}";
        style="background-color: ${e-hex}">
           
        </div>
    </div>
    <div class="meta">
    <p>HEX: ${e-hex}</p>
    <p>RGB: ${e-rgb}</p>
   </div>`).join(""),a.addEventListener("click",e=>{let r=event.target.closest("color-swatch");if(!r)return;let a=r.dataset.hex;document.body.style.backgroundColor=a,document.querySelectorAll(".card").forEach(e=>{e.classList.remove("is-active")}),r.parentElement.classList.add("is-active")});
//# sourceMappingURL=index.50a57c01.js.map
