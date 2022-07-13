import { inner } from './cards.js';

const orderBuys = {}
let array = '';
const buyCart = document.querySelector(".cartMainEverything");



document.addEventListener('click', function (event) {
    if (event.target.classList.contains("button")) {
        const idClothes = event.target.dataset.iduser;

        let currentClothes = null;
        let cartCards = []
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

        // console.log(order)


        order.forEach(element => {
            if (element) {
                array += `<div class="buysContent">
                <div class="imgCart"></div>
                <div class="infoClothes">
                    <div class="principalProductInfo">
                        <div class="clothesName">${element.type}</div>
                        <div class="clothesprice">Stock: ${element.stock} | ${element.price}</div>
                        <div class="subTotal">Subtotal: $${(parseInt(element.price) * (element.amount))}</div>
                    </div>
                    <div class="buttonsCart">
                        <div class="operator">-</div>
                        <div class="quantify">${element.amount} units</div>
                        <div class="operator">+</div>
                    </div>
                </div>
            </div>`
            } else {
                
            }
           
        });
    };

    console.log(array)
    buyCart.innerHTML = array

}

);

export { orderBuys }