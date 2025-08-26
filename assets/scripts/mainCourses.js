//Retrieve the main Courses from the database and display it
function mainCoursesRender() {
  showShoppingCart();
  let output = document.getElementById("content");
  output.innerHTML = `<img class="hauptgerichte" src="assets/imgs/fotos/restaurant.jpg" alt="hauptgerichte Foto">`;
  for (let i = 0; i < pizzaMenu.length; i++) {
    output.innerHTML += pizzaMenuRender(i);
  }
}
//Defining the HTML template and structure for the pizza list and returning the value
function pizzaMenuRender(i) {
  return `
        <article class="article">
          <div class="pizza_detail">
            <img class="pizza_img" src="assets/imgs/fotos/pizza/${pizzaMenu[i].image}" alt="Pizza Menu">
            <div class="pizza_info">
              <h2>${pizzaMenu[i].name}</h2>
              <p>${pizzaMenu[i].type} - ${pizzaMenu[i].calories} kl</p>
              <ul class="ingredients">${ingredientsRender(i)}</ul>
              <div class="ul_radiobox">
                <span class="text_bold">Größe:</span>
                <ul>${pricePizzaRender(i)}</ul>
              </div>
            </div>
          </div>
          <div class="add_pizza">
            <button onclick="addPizzaToCart(${i})" class="btn_add_pizza" aria-label="Add Pizza to Cart"><img src="assets/imgs/icons/plus.png" alt="add Pizza" width="30px" height=30px></button>
          </div>       
        </article>
    `;
}
function ingredientsRender(i) {
  let output = "";
  for (let j = 0; j < pizzaMenu[i].ingredients.length; j++) {
    output += `
      <li>${pizzaMenu[i].ingredients[j]}</li>
    ` 
  }
  return output;
}


//Reading and displaying the pizza price and size from the database
function pricePizzaRender(i) {
  let outputSize = `
      <li>
        <label>
          <input id="radio_pizza_0" type="radio" value="0" name="size_${i}" checked>
          ${pizzaMenu[i].size[0]} (${pizzaMenu[i].price[0]}€)
        </label>
      </li>
  `;
  for (let j = 1; j < pizzaMenu[i].size.length; j++) {
    outputSize += `
      <li>
        <label>
          <input id="radio_pizza_${j}" type="radio" value="${j}" name="size_${i}">
          ${pizzaMenu[i].size[j]} (${pizzaMenu[i].price[j]}€)
        </label>
      </li>
    `;
  }
  return outputSize;
}
//Adding the selected pizza to the predefined database for the shopping cart
function addPizzaToCart(i) {
  let selected = document.querySelector(`input[name="size_${i}"]:checked`);
  selected = parseFloat(selected.value);

  let price = pizzaMenu[i].price[selected];
  let size = pizzaMenu[i].size[selected];

  let checkName = pizzaMenu[i].name;
  let checkSize = pizzaMenu[i].size[selected];
  let index = CheckingCartInventoryMenu(checkName, checkSize, 'mainCourses');
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
//Checking whether this pizza or side dishes are already in the shopping cart or not
function CheckingCartInventoryMenu(name, size, array) {
  let index = cart[array].findIndex(item =>
    item.name === name && item.size === size
  );
  return index;
}