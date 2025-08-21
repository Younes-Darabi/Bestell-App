function showPizzaMenu() {
  let output = document.getElementById("content");
  output.innerHTML = "";
  for (let i = 0; i < pizzaMenu.length; i++) {
    output.innerHTML += pizzaFramrender(i);
  }
}

function pizzaFramrender(i) {
  return `
        <article class="article">
            <img class="pizza_img" src="assets/imgs/fotos/${
              pizzaMenu[i].image
            }">
            <div class="pizza_info">
              <h2>${pizzaMenu[i].name}</h2>
              <p>${pizzaMenu[i].type} - ${pizzaMenu[i].calories} kl</p>
              <p>${pizzaMenu[i].ingredients}</p>
              <ul><span class="text_bold">Größe:</span>${priceRender(i)}</ul>
              <ul><span class="text_bold">Extras:</span>${extrasRender(i)}</ul>
            </div>
        </article>
    `;
}

function extrasRender(i) {
  let extras= "";
  for (let j = 0; j < pizzaMenu[i].extras.length; j++) {
    extras += `
            <label><input type="checkbox" >${pizzaMenu[i].extras[j]}</label>
        `;
  }
  return extras;
}

function priceRender(i) {
  let price= Object.values(pizzaMenu[i].price);
  let size= Object.keys(pizzaMenu[i].price);
  let outputSize="";
  for (let j = 0; j < size.length; j++) {
    outputSize +=`
           <label><input type="radio" name="size_${i}">${size[j]} (${price[j]}€)</label>
        `;
  }
  return outputSize;
}