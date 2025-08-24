
function showPizzaMenu() {
  showShoppingCart();
  let output = document.getElementById("content");
  output.innerHTML = `<img class="hauptgerichte" src="assets/imgs/fotos/restaurant.jpg">`;
  for (let i = 0; i < pizzaMenu.length; i++) {
    output.innerHTML += pizzaMenuRender(i);
  }
}

function pizzaMenuRender(i) {
  return `
        <article class="article">
          <div class="pizza_detail">
            <img class="pizza_img" src="assets/imgs/fotos/pizza/${pizzaMenu[i].image}">
            <div class="pizza_info">
              <h2>${pizzaMenu[i].name}</h2>
              <p>${pizzaMenu[i].type} - ${pizzaMenu[i].calories} kl</p>
              <p>${pizzaMenu[i].ingredients}</p>
              <ul><span class="text_bold">Größe:</span>${pricePizzaRender(i)}</ul>
            </div>
          </div>
          <div class="add_pizza">
            <button onclick="addPizzaToCart(${i})" class="btn_add_pizza"><img src="assets/imgs/icons/plus.png" width="30px" height=30px></button>
          </div>       
        </article>
    `;
}

function pricePizzaRender(i) {
  let outputSize = `
  <label><input id="radio_pizza_0" type="radio" value="0" name="size_${i}" checked>${pizzaMenu[i].size[0]} (${pizzaMenu[i].price[0]}€)</label>
  `;
  for (let j = 1; j < pizzaMenu[i].size.length; j++) {
    outputSize += `
           <label><input id="radio_pizza_${j}" type="radio" value="${j}" name="size_${i}">${pizzaMenu[i].size[j]} (${pizzaMenu[i].price[j]}€)</label>
        `;
  }
  return outputSize;
}

function addPizzaToCart(i) {
  let selected = document.querySelector(`input[name="size_${i}"]:checked`);
  selected = parseFloat(selected.value);

  let price = pizzaMenu[i].price[selected];
  let size = pizzaMenu[i].size[selected];

  let checkName = pizzaMenu[i].name;
  let chackSize = pizzaMenu[i].size[selected];
  let index = CheckingCartInventoryPizzaMenu(checkName, chackSize);
  if (index == -1) {
    cart.mainCourses.push({
      "name": pizzaMenu[i].name,
      "price": price,
      "size": size,
      "amount": 1,
    });
  } else {
    cart.mainCourses[index].amount++;
  }
  showShoppingCart();
}

function CheckingCartInventoryPizzaMenu(name, size) {
  let index = cart.mainCourses.findIndex(item =>
    item.name === name && item.size === size
  );
  return index;
}