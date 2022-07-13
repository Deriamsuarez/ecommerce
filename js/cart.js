import { inner } from './cards.js';

const orderBuys = {}
const buyCart = document.querySelector(".cartMainEverything");

let emptyCart =  `<div class="imageCart">
     <img src="https://c.tenor.com/bDlzu1tRfowAAAAd/negrito-llorando-african-kid-crying.gif">
 </div> 
 <h2>Aún no tienes ninún producto</h2>
 `

 buyCart.innerHTML = emptyCart



document.addEventListener('click', function (event) {
    if (event.target.classList.contains("button")) {
        const idClothes = event.target.dataset.iduser;

        let currentClothes = null;
        for (let i = 0; i < inner.length; i++) {
            if (inner[i].id === parseInt(idClothes)) {
                currentClothes = inner[i];
            }
        }

        if (orderBuys[currentClothes.id]) {
            orderBuys[currentClothes.id].amount++;
        } else {
            orderBuys[currentClothes.id] = currentClothes;
            orderBuys[currentClothes.id].amount = 1;
        }

        const order = Object.values(orderBuys)
        const amount = document.querySelector('#amount');
        amount.textContent = Object.entries(orderBuys).length;

        let array = '';

        order.forEach(element => {
            array += `<div class="buysContent">
                <div class="imgCartBuy">
                <img src="${element.img}" alt="">
                </div>
                <div class="infoClothes">
                    <div class="principalProductInfo">
                        <div class="clothesName">${element.type}</div>
                        <div class="clothesprice">Stock: ${element.stock} | $${element.price}.00</div>
                        <div class="subTotal">Subtotal: $${(parseInt(element.price) * (element.amount))}.00</div>
                    </div>
                    <div class="buttonsCart">
                        <div class="operator">-</div>
                        <div class="quantify">${element.amount} units</div>
                        <div class="operator">+</div>
                    </div>
                </div>
            </div>`

        });
        
        
        console.log(event)
        buyCart.innerHTML = array

        
        if(event.target.classList.contains("operator")){
            console.log(event)
        }
    };

});

export { orderBuys }