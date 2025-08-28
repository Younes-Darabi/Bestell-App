function showMiniMenu() {
  document.getElementById("mini_menu").classList.toggle("display_none");
}

function showBeilageMenu() {
  let output = document.getElementById("content");
  output.innerHTML = `<img class="hauptgerichte" src="assets/imgs/fotos/Drinks.jpg" alt="Side Dish Foto">`;
  for (let i = 0; i < extrasMenu.length; i++) {
    output.innerHTML += menuRender(i, "sideDish");
  }
}

function mainCoursesRender() {
  showShoppingCart();
  let output = document.getElementById("content");
  output.innerHTML = `<img class="hauptgerichte" src="assets/imgs/fotos/restaurant.jpg" alt="hauptgerichte Foto">`;
  for (let i = 0; i < pizzaMenu.length; i++) {
    output.innerHTML += menuRender(i, "pizza");
  }
}

function menuRender(i, type) {
  let menu = type === "pizza" ? pizzaMenu : extrasMenu;
  let priceRender = type === "pizza" ? pricePizzaBeilageRender(i, pizzaMenu) : pricePizzaBeilageRender(i, extrasMenu);
  let addToCartFn = `addToCart(${i}, '${type}')`;
  let imgFolder = type === "pizza" ? "pizza" : "extras";
  return menuRenderReturn(i, type, menu, priceRender, addToCartFn, imgFolder);
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

function CheckingCartInventoryMenu(name, size, array) {
  let index = cart[array].findIndex(item =>
    item.name === name && item.size === size
  );
  return index;
}

function addToCart(i, type) {
  let menu = type === "pizza" ? pizzaMenu : extrasMenu;
  let menuName = type === "pizza" ? "mainCourses" : "sideDishes";
  let selected = document.querySelector(`input[name="size_${i}"]:checked`);
  let selectedIndex = parseFloat(selected.value);
  let price = menu[i].price[selectedIndex];
  let size = menu[i].size[selectedIndex];
  let name = menu[i].name;
  let index = CheckingCartInventoryMenu(name, size, menuName);
  if (index === -1) {
    cart[menuName].push({
      name: name,
      price: price,
      size: size,
      amount: 1,
    });
  } else {
    cart[menuName][index].amount++;
  }
  showShoppingCart();
}