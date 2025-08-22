function showShoppingCart() {
    let showCart = document.getElementById("ShoppingCart");
    showCart.innerHTML = "";
    for (let i = 0; i < cart.mainCourses.length; i++) {
        showCart.innerHTML += showMainCoursesInCart(i);
    }
    for (let i = 0; i < cart.sideDishes.length; i++) {
        showCart.innerHTML += showMainSideDishesInCart(i);
    }
}

function showMainSideDishesInCart(i) {
    let amount = cart.sideDishes[i].amount;
    let price = parseFloat(cart.sideDishes[i].price);
    let totalPrice = amount * price;
    totalPrice = totalPrice.toFixed(2);
    return ` 
        <h3>${cart.sideDishes[i].name}</h3>
        <p><span class="text_bold">Größe:</span> ${cart.sideDishes[i].size}</p>
        <p><span class="text_bold">Preis: </span>${cart.sideDishes[i].price} €</p>
        <div class="display_space">
            <p><span class="text_bold">Mange: </span>${cart.sideDishes[i].amount}</p>
            <p class="red">${totalPrice}€</p>
        </div>
        <div class="line"></div>
    `;
}

function showMainCoursesInCart(i) {
    let amount = cart.mainCourses[i].amount;
    let price = parseFloat(cart.mainCourses[i].price);
    let totalPrice = amount * price;
    totalPrice = totalPrice.toFixed(2);
    return ` 
        <h3>${cart.mainCourses[i].name}</h3>
        <p><span class="text_bold">Größe:</span> ${cart.mainCourses[i].size}</p>
        <p><span class="text_bold">Preis: </span>${cart.mainCourses[i].price} €</p>
        <div class="display_space">
            <p><span class="text_bold">Mange: </span>${cart.mainCourses[i].amount}</p>
            <p class="red">${totalPrice}€</p>
        </div>
        <div class="line"></div>
    `;
}