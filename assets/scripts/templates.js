function menuRenderReturn(i, type,menu,priceRender,addToCartFn,imgFolder) {
  return `
        <article class="article">
          <div class="pizza_detail">
            <img class="pizza_img" src="assets/imgs/fotos/${imgFolder}/${menu[i].image}" alt="${type} Menu">
            <div class="pizza_info">
              <h2>${menu[i].name}</h2>
              <p>${menu[i].type} - ${menu[i].calories} kl</p>
              ${type === "pizza" ? `<ul class="ingredients">${ingredientsRender(i)}</ul>` : ""}
              <div class="ul_radiobox">
                <span class="text_bold">Größe:</span>
                <ul>${priceRender}</ul>
              </div>
            </div>
          </div>
          <div class="add_pizza">
            <button onclick="${addToCartFn}" class="btn_add_pizza" aria-label="Add ${type} to Cart">
              <img src="assets/imgs/icons/plus.png" alt="add ${type}" width="30px" height="30px">
            </button>
          </div>       
        </article>
    `;
}

function pricePizzaBeilageRender(i,type) {
  let outputSize = `
      <li>
        <label>
          <input id="radio_pizza_0" type="radio" value="0" name="size_${i}" checked>
          ${type[i].size[0]} (${type[i].price[0]}€)
        </label>
      </li>
  `;
  for (let j = 1; j < type[i].size.length; j++) {
    outputSize += `
      <li>
        <label>
          <input id="radio_pizza_${j}" type="radio" value="${j}" name="size_${i}">
          ${type[i].size[j]} (${type[i].price[j]}€)
        </label>
      </li>
    `;
  }
  return outputSize;
}

function showInCartReturn(array, i, totalPrice) {
    return `
        <div class="display_space"> 
            <h3>${cart[array][i].name}</h3>
            <div>
                <button onclick="removeFromCart('${array}',${i})" class="btn_add_pizza"><img src="assets/imgs/icons/delete.png" alt="delete icon" width="20px" height=20px></button>
            </div> 
        </div>
        <p><span class="text_bold">Größe:</span> ${cart[array][i].size}</p>
        <p><span class="text_bold">Preis: </span>${cart[array][i].price} €</p>
        <div class="display_space">
            <p><span class="text_bold">Mange: </span>${cart[array][i].amount}</p>
            <div>
                <button onclick="SubtractOneAmount('${array}',${i})" class="btn_add_pizza"><img src="assets/imgs/icons/remove.png" alt="remove icon" width="20px" height=20px></button>
                <button onclick="AddOneToAmount('${array}',${i})" class="btn_add_pizza"><img src="assets/imgs/icons/add.png" alt="add icon" width="20px" height=20px></button>
            </div>
            <p class="red">${totalPrice}€</p>
        </div>
        <div class="line"></div>
    `;
}

function showTotalPaymentPriceHTML(totalAmount, totalPaymentPrice) {
    return `
    <div class="red_line"></div>
    <div class="display_space">
        <p class="red">${totalAmount}</p>
        <p class="red">${totalPaymentPrice.toFixed(2)}€</p>
    </div>
    <div class="zur_kasse_btn"> 
        <a href="html/checkout.html">
            <img src="assets/imgs/icons/kasse.png"  alt="kasse icon" width="30" height="30" alt="Zur Kasse"> Zur Kasse
        </a>
    </div>     
    `
}