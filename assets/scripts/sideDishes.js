
function showBeilageMenu() {
  let output = document.getElementById("content");
  output.innerHTML = `<img class="hauptgerichte" src="assets/imgs/fotos/Drinks.jpg">`;
  for (let i = 0; i < extrasMenu.length; i++) {
    output.innerHTML += BeilageMenuRender(i);
  }
}

function BeilageMenuRender(i) {
  return `
        <article class="article">
          <div class="pizza_detail">
            <img class="pizza_img" src="assets/imgs/fotos/${extrasMenu[i].image}">
            <div class="pizza_info">
              <h2>${extrasMenu[i].name}</h2>
              <p>${extrasMenu[i].type} - ${extrasMenu[i].calories} kl</p>
              <ul><span class="text_bold">Größe:</span>${priceBeilageRender(i)}</ul>
            </div>
          </div>
          <div class="add_pizza">
            <button onclick="addSideDishesToCart(${i})" class="btn_add_pizza"><img src="assets/imgs/icons/plus.png" width="30px" height=30px></button>
          </div>       
        </article>
    `;
}

function priceBeilageRender(i) {
  let outputSize = `
  <label><input id="radio_beilage_0" type="radio" value="0" name="size_${i}" checked>${extrasMenu[i].size[0]} (${extrasMenu[i].price[0]}€)</label>
  `;
  for (let j = 1; j < extrasMenu[i].size.length; j++) {
    outputSize += `
           <label><input id="radio_beilage_${j}" type="radio" value="${j}" name="size_${i}">${extrasMenu[i].size[j]} (${extrasMenu[i].price[j]}€)</label>
        `;
  }
  return outputSize;
}

function addSideDishesToCart(i) {
  let selected = document.querySelector(`input[name="size_${i}"]:checked`);
  selected = parseFloat(selected.value);

  let price = extrasMenu[i].price[selected];
  let size = extrasMenu[i].size[selected];

  let checkName = extrasMenu[i].name;
  let chackSize = extrasMenu[i].size[selected];
  let index = CheckingCartInventoryExtrasMenu(checkName, chackSize);
  if (index == -1) {
    cart.sideDishes.push({
      "name": extrasMenu[i].name,
      "price": price,
      "size": size,
      "amount": 1,
    });
  } else {
    cart.sideDishes[index].amount++;
  }
  showShoppingCart();
}

function CheckingCartInventoryExtrasMenu(name, size) {
  let index = cart.sideDishes.findIndex(item => 
    item.name === name && item.size === size
  );
  return index;
}