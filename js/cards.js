const cards = document.querySelector(".clothesCards");

const inner = [
    {
        price: "$14.00",
        stock: 9,
        type: "Hoodies",
        img: "https://academlo-store.netlify.app/assets/img/featured1.png"
    },

    {
        price: "$24.00",
        stock: 15,
        type: "Shirts",
        img: "https://academlo-store.netlify.app/assets/img/featured2.png"
    },
    {
        price: "$24.00",
        stock: 20,
        type: "Sweartshirts",
        img: "https://academlo-store.netlify.app/assets/img/featured3.png"
    },
];

let str = '';

// inner.forEach(element => {
//     str += `<div class="cardFull">
//     <div class="button">+</div>
//                     <div class="card">
//                     <img src="${element.img}" alt="" srcset="">
//                 </div>
//                 <div class="cardFooter">
//                     <div class="priceContainer">
//                         <div class="price">${element.price}</div>
//                         <div class="priceSeparator"></div>
//                         <div class="stock">stock: ${element.stock}</div>
//                     </div>
//                     <div class="typeClothes">${element.type}</div>
//                 </div>
//           </div>`;
// });



const itemType = document.querySelector('.infoBox');


itemType.addEventListener('click', () =>{
    str = '';

   for (let i = 0; i <= inner.length; i++) {
       const element = inner[i]
    //    console.log(element.img);
    str += `<div class="cardFull">
    <div class="button">+</div>
                    <div class="card">
                    <img src="${element.img}" alt="" srcset="">
                </div>
                <div class="cardFooter">
                    <div class="priceContainer">
                        <div class="price">${element.price}</div>
                        <div class="priceSeparator"></div>
                        <div class="stock">stock: ${element.stock}</div>
                    </div>
                    <div class="typeClothes">${element.type}</div>
                </div>
          </div>`;
    
   }
   console.log(str)
   return str
});





cards.innerHTML = str;